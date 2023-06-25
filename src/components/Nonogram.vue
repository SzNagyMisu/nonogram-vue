<script setup>
import { computed } from 'vue';

import NonogramTable from '../components/NonogramTable.vue';
import HorizontalDefinitions from '../components/HorizontalDefinitions.vue';
import VerticalDefinitions from '../components/VerticalDefinitions.vue';

import { checkValidity, getHorizontalDefinitions, getVerticalDefinitions } from '../utils.js';

const props = defineProps({
    table: {
        type: Array,
        required: true,
    },
    horizontalDefinitions: {
        type: Array,
        required: true,
    },
    verticalDefinitions: {
        type: Array,
        required: true,
    },
    showValidity: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(["cellClick"]);

const onCellClick = (rowIdx, colIdx) => emit("cellClick", rowIdx, colIdx);

const horizontalValidity = computed(() => {
    if (!props.showValidity) return;

    const definitionsByTable = getHorizontalDefinitions(props.table);
    return props.horizontalDefinitions.map((numbers, defIdx) => (
        checkValidity(definitionsByTable[defIdx], numbers)
    ));
});

const verticalValidity = computed(() => {
    if (!props.showValidity) return;

    const definitionsByTable = getVerticalDefinitions(props.table);
    return props.verticalDefinitions.map((numbers, defIdx) => (
        checkValidity(definitionsByTable[defIdx], numbers)
    ));
});
</script>

<template>
    <section class="flex">
        <NonogramTable
            :table="table"
            @cellClick="onCellClick"
        />
        <HorizontalDefinitions :definitions="horizontalDefinitions" :validity="horizontalValidity" />
    </section>
    <VerticalDefinitions :definitions="verticalDefinitions" :validity="verticalValidity" />
</template>

<style>
section.flex {
    display: flex;
    gap: 3px;
}
</style>
