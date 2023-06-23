<script setup>
import { computed, ref } from 'vue';

import SetSize from './components/SetSize.vue';
import NonogramTable from './components/NonogramTable.vue';
import HorizontalDefinitions from './components/HorizontalDefinitions.vue';
import VerticalDefinitions from './components/VerticalDefinitions.vue';


const table = ref([]);

const rowCount = computed(() => table.value.length);
const colCount = computed(() => table.value[0] && table.value[0].length);

const changeColor = (rowIdx, colIdx) => {
    const color = table.value[rowIdx][colIdx];
    table.value[rowIdx][colIdx] = color === null ? "black" : null;
};

const getCellValue = (rowIdx, colIdx) => table.value[rowIdx] && table.value[rowIdx][colIdx];

const setTable = (newRowCount, newColCount) => {
    const newTable = [];
    for (let rowIdx = 0; rowIdx < newRowCount; rowIdx++) {
        newTable[rowIdx] = [];
        for (let colIdx = 0; colIdx < newColCount; colIdx++) {
            newTable[rowIdx][colIdx] = getCellValue(rowIdx, colIdx) || null;
        }
    }
    table.value = newTable;
};
</script>

<template>
    <h1>Nonogram creator</h1>

    <SetSize
        :rowCount="rowCount"
        :colCount="colCount"
        @setRowCount="newRowCount => setTable(newRowCount, colCount)"
        @setColCount="newColCount => setTable(rowCount, newColCount)"
    />
    <section class="flex">
        <NonogramTable
            :table="table"
            @cellClick="changeColor"
        />
        <HorizontalDefinitions :table="table" />
    </section>
    <VerticalDefinitions :table="table" />
</template>

<style scoped>
section.flex {
    display: flex;
    gap: 3px;
}
</style>
