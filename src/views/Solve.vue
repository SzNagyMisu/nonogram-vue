<script setup>
import { computed, reactive, ref } from 'vue';

import ImportJSON from '../components/ImportJSON.vue';
import Nonogram from '../components/Nonogram.vue';

import { getNewTable } from '../utils.js';
import { BLACK } from '../consts';

const stepIdx = ref(0);

const definitions = reactive({
    horizontal: [],
    vertical: [],
});

const table = ref([]);

const horizontalDefinitions = computed(() => definitions.horizontal);
const verticalDefinitions = computed(() => definitions.vertical);

const onSetDefinitions = ({ horizontal, vertical }) => {
    definitions.horizontal = horizontal;
    definitions.vertical = vertical;
    table.value = getNewTable(horizontal.length, vertical.length, []);
    stepIdx.value++;
};

const changeColor = (rowIdx, colIdx) => {
    const color = table.value[rowIdx][colIdx];
    table.value[rowIdx][colIdx] = color === BLACK ? null : BLACK;
};
</script>

<template>
    <h1>Solve a nonogram</h1>

    <ImportJSON    v-if="stepIdx === 0" @setDefinitions="onSetDefinitions" />
    <Nonogram v-else-if="stepIdx === 1"
        v-bind="{ horizontalDefinitions, verticalDefinitions, table }"
        @cellClick="changeColor"
    />
</template>

<style scoped>
</style>
