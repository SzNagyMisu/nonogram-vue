<script setup>
import { computed, ref } from 'vue';

import NonogramTable from './components/NonogramTable.vue';


const table = ref([
    [null, null, "black"],
    [null, "black", null],
    ["black", null, null],
]);

const rowCount = computed(() => table.value.length);
const colCount = computed(() => table.value[0] && table.value[0].length);

const changeColor = (rowIdx, colIdx) => {
    const color = table.value[rowIdx][colIdx];
    table.value[rowIdx][colIdx] = color === null ? "black" : null;
};
</script>

<template>
    <NonogramTable
        :table="table"
        @cellClick="changeColor"
    />
</template>

<style scoped>
</style>
