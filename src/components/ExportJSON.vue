<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    horizontalDefinitions: {
        type: Array,
        required: true,
    },
    verticalDefinitions: {
        type: Array,
        required: true,
    },
});

const show = ref(false);
const copyButtonText = ref("Copy");

const jsonContainerRef = ref(null);

const json = computed(() => JSON.stringify({
    horizontal: props.horizontalDefinitions,
    vertical: props.verticalDefinitions,
}));

const copyJSON = () => {
    jsonContainerRef.value.select();
    navigator.clipboard.writeText(jsonContainerRef.value.value);
    jsonContainerRef.value.blur();
    copyButtonText.value = "Copied";
    setTimeout(() => copyButtonText.value = "Copy", 5000);
};
</script>

<template>
    <form v-if="show" @submit.prevent="copyJSON" @reset="show = false">
        <textarea ref="jsonContainerRef" readonly :value="json" />
        <input type="submit" :value="copyButtonText" />
        <input type="reset" value="Hide JSON" />
    </form>
    <input type="button" v-else value="Show JSON" @click="show = true" />
</template>

<style scoped>
textarea {
    display: block;
    width: 500px;
    height: 150px;
}
</style>
