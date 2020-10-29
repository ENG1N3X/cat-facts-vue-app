<template>
    <div class="data-item">
        <div class="inner">
            <span>Created: {{ formatDate(dataItem.createdAt) }}</span>
        </div>
        <span>{{ dataItem.text }}</span>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: "Item",
    props: {
        dataItem: {
            type: Object,
            required: true
        }
    },
    methods: {
        formatDate(value) {
            return moment(String(value)).format("hh:mm MM/DD/YYYY")
        }
    }
}
</script>
