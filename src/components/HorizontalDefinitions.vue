<script setup>
defineProps({
    table: {
        type: Array,
        required: true,
    },
});

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
        <section class="row" v-for="row in table">
            <article v-for="num in numsForRow(row)">{{ num }}</article>
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
