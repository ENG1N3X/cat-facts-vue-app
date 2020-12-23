import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		factsArr: [],
		error: "",
	},
	actions: {
		async getFactsByType({ commit }, type) {
			try {
				let response = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${type}&amount=4`);
				response = await response.json();
				if (response.length > 0) {
					console.log("[getFactsByType] Fetching..", response);
					commit("SET_FACTS_BY_TYPE", response);
					commit("CLEAR_ERROR", `Search by ${type}`);
				} else {
					commit("SET_ERROR", "Nothing found");
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
	mutations: {
		SET_FACTS_BY_TYPE(state, data) {
			if (state.factsArr.length > 0) {
				state.factsArr = [...JSON.parse(JSON.stringify(state.factsArr)), ...JSON.parse(JSON.stringify(data))];
			} else {
				state.factsArr = data;
			}
		},
		SET_ERROR(state, error) {
			state.error = error;
		},
		CLEAR_ERROR(state, msg = "") {
			if (msg != "") {
				state.error = msg;
			}
		},
	},
	getters: {
		factsArr: (state) => state.factsArr,
		error: (state) => state.error,
	},
});
