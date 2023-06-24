<script setup>
import { computed } from 'vue';

const props = defineProps({
    definitions: {
        type: Array,
        required: true,
    },
});
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
