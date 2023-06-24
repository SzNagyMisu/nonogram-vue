<script setup>
const props = defineProps({
    definitions: {
        type: Array,
        required: true,
    },
    validity: {
        type: Array,
        required: false,
    },
});

const getColClass = (idx) => {
    const classList = ["column"];
    if (props.validity) {
        const colValidity = props.validity[idx];
        if (colValidity === true) {
            classList.push("valid");
        } else if (colValidity === false) {
            classList.push("invalid");
        }
    }
    return classList;
};
</script>

<template>
    <section class="definitions vertical">
        <section v-for="(definition, idx) in definitions" :class="getColClass(idx)">
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
section.column.valid {
    color: green;
}
section.column.invalid {
    color: red;
}

article {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
