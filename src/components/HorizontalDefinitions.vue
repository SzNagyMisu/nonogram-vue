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

const getRowClass = (idx) => {
    const classList = ["row"];
    if (props.validity) {
        const rowValidity = props.validity[idx];
        if (rowValidity === true) {
            classList.push("valid");
        } else if (rowValidity === false) {
            classList.push("invalid");
        }
    }
    return classList;
};
</script>

<template>
    <section class="definitions horizontal">
        <section v-for="(definition, idx) in definitions" :class="getRowClass(idx)">
            <article v-for="num in definition">{{ num }}</article>
        </section>
    </section>
</template>

<style scoped>
section.row {
    display: flex;
    height: 30px;
}
section.row.valid {
    color: green;
}
section.row.invalid {
    color: red;
}

article {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
