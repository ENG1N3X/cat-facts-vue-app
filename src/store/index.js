import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		factsArr: [],
		favArr: [],
		error: "",
	},
	actions: {
		async getFactsByType({ commit }, type) {
			try {
				let response = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${type}&amount=4`);
				response = await response.json();

				// Need to modified
				for (const item of response) {
					item.isFav = false;
				}
				// console.log(response)

				if (response.length) {
					commit("CONCAT_FACTS_OBJECTS", response);
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
		CONCAT_FACTS_OBJECTS(state, factsObj) {
			state.factsArr = state.factsArr.length ? [...state.factsArr, ...factsObj] : factsObj;
		},
		SET_FAV_ITEM(state, fact) {
			fact.isFav = true
			state.favArr.push(fact);
		},
		DELETE_FAV_ITEM(state, fact,) {
			fact.isFav = false
			state.favArr = state.favArr.filter((item) => {
				return item._id != fact._id;
			});
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
		favArr: (state) => state.favArr,
		error: (state) => state.error,
	},
});
