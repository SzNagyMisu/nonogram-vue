<script setup>
import { computed, ref } from 'vue';

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
    <section class="table">
        <section class="row" v-for="(row, rowIdx) in table" :key="rowIdx">
            <article class="cell" v-for="(cell, colIdx) in row" :key="colIdx" :class="cell" @click="changeColor(rowIdx, colIdx)" />
        </section>
    </section>
</template>

<style scoped>
section.table {
    display: inline-block;
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
