<script setup>
import NonogramTable from '../components/NonogramTable.vue';
import HorizontalDefinitions from '../components/HorizontalDefinitions.vue';
import VerticalDefinitions from '../components/VerticalDefinitions.vue';

defineProps({
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
});

const emit = defineEmits(["cellClick"]);

const onCellClick = (rowIdx, colIdx) => emit("cellClick", rowIdx, colIdx);
</script>

<template>
    <section class="flex">
        <NonogramTable
            :table="table"
            @cellClick="onCellClick"
        />
        <HorizontalDefinitions :definitions="horizontalDefinitions" />
    </section>
    <VerticalDefinitions :definitions="verticalDefinitions" />
</template>

<style>
section.flex {
    display: flex;
    gap: 3px;
}
</style>
