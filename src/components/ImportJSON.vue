<script setup>
import { ref } from 'vue';

const emit = defineEmits(["setDefinitions"]);
const definitions = ref(null);

const setDefinitions = () => emit("setDefinitions", JSON.parse(definitions.value));
</script>

<template>
    <form @submit.prevent="setDefinitions">
        <textarea v-model="definitions" />
        <input type="submit" value="Import JSON" />
    </form>
</template>

<style scoped>
textarea {
    display: block;
    width: 500px;
    height: 150px;
}
</style>
