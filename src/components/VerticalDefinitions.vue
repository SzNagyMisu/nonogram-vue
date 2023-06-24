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
