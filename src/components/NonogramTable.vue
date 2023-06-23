<script setup>
defineProps({
    table: {
        type: Array,
        required: true,
    },
});
const emit = defineEmits(["cellClick"]);

const onCellClicked = (rowIdx, colIdx) => emit("cellClick", rowIdx, colIdx);
</script>

<template>
    <section class="table">
        <section class="row" v-for="(row, rowIdx) in table" :key="rowIdx">
            <article class="cell" v-for="(cell, colIdx) in row" :key="colIdx" :class="cell" @click="onCellClicked(rowIdx, colIdx)" />
        </section>
    </section>
</template>

<style scoped>
section.table {
    border: 1px solid black;
}
section.row {
    display: flex;
}
article {
    width: 30px;
    height: 30px;
}
article:hover {
    border: 1px solid aquamarine;
    margin: -1px;
}
article.black {
    background-color: black;
}
</style>
