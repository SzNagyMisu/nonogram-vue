<script setup>
defineProps({
    colCount: {
        type: Number,
        required: true,
    },
    rowCount: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits(["setRowCount", "setColCount"]);

const setRowCount = ($event) => emit("setRowCount", $event.target.value);
const setColCount = ($event) => emit("setColCount", $event.target.value);
</script>

<template>
    <fieldset>
        Size:
        <input type="number" :value="rowCount" @input="setRowCount" />
        ×
        <input type="number" :value="colCount" @input="setColCount" :disabled="rowCount === 0" />
    </fieldset>
</template>

<style scoped>
fieldset {
    padding-inline-start: 0;
    border: none;
}

input[type=number] {
    width: 50px;
}
</style>
