<script setup>
import { computed } from 'vue';

const props = defineProps({
    table: {
        type: Array,
        required: true,
    },
});

const definitions = computed(() => props.table.map(numsForRow));

const numsForRow = (row) => {
    const nums = [];
    let num = 0;
    row.forEach(cell => {
        if (cell === "black") {
            num++;
        } else {
            if (num > 0) {
                nums.push(num);
            }
            num = 0;
        }
    });
    if (num > 0) {
        nums.push(num);
    }
    return nums;
}
</script>

<template>
    <section class="definitions horizontal">
        <section class="row" v-for="definition in definitions">
            <article v-for="num in definition">{{ num }}</article>
        </section>
    </section>
</template>

<style scoped>
section.row {
    display: flex;
    height: 30px;
}

article {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
