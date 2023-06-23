<script setup>
import { computed } from 'vue';

const props = defineProps({
    table: {
        type: Array,
        required: true,
    },
});

const rowCount = computed(() => props.table.length);
const colCount = computed(() => props.table[0] && props.table[0].length);

const definitions = computed(() => {
    const _definitions = [];
    for (let colIdx = 0; colIdx < colCount.value; colIdx++) {
        _definitions[colIdx] = [];
        let num = 0;
        for (let rowIdx = 0; rowIdx < rowCount.value; rowIdx++) {
            if (props.table[rowIdx][colIdx] === "black") {
                num++;
            } else if (num > 0) {
                _definitions[colIdx].push(num);
                num = 0;
            }
        }
        if (num > 0) {
            _definitions[colIdx].push(num);
        }
    }
    return _definitions;
})
</script>

<template>
    <section class="definitions vertical">
        <section class="column" v-for="definition in definitions">
            <article v-for="num in definition">{{ num }}</article>
        </section>
    </section>
</template>

<style scoped>
section.definitions.vertical {
    display: flex;
}

section.column {
    width: 30px;
    display: flex;
    flex-direction: column;
}

article {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
