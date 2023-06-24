<script setup>
import { computed, ref } from 'vue';

import { BLACK } from '../consts.js';
import {
    getRowCount,
    getColCount,
    getHorizontalDefinitions,
    getVerticalDefinitions,
    getNewTable,
} from '../utils.js';

import SetSize from '../components/SetSize.vue';
import ExportJSON from '../components/ExportJSON.vue';
import Nonogram from '../components/Nonogram.vue';

const table = ref([]);

const rowCount = computed(() => getRowCount(table.value));
const colCount = computed(() => getColCount(table.value));

const horizontalDefinitions = computed(() => getHorizontalDefinitions(table.value));
const verticalDefinitions = computed(() => getVerticalDefinitions(table.value));

const changeColor = (rowIdx, colIdx) => {
    const color = table.value[rowIdx][colIdx];
    table.value[rowIdx][colIdx] = color === BLACK ? null : BLACK;
};

const setTable = (newRowCount, newColCount) => {
    table.value = getNewTable(newRowCount, newColCount, table.value);
};
</script>

<template>
    <h1>Nonogram creator</h1>

    <ExportJSON v-bind="{ horizontalDefinitions, verticalDefinitions }" />

    <SetSize
        :rowCount="rowCount"
        :colCount="colCount"
        @setRowCount="newRowCount => setTable(newRowCount, colCount)"
        @setColCount="newColCount => setTable(rowCount, newColCount)"
    />

    <Nonogram v-bind="{ table, horizontalDefinitions, verticalDefinitions }" @cellClick="changeColor" />
</template>

<style scoped>
</style>
