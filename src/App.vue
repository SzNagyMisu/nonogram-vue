<script setup>
</script>

<template>
    <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'create' }">Create</RouterLink>
        <RouterLink :to="{ name: 'from-image' }">Convert Image</RouterLink>
        <RouterLink :to="{ name: 'solve' }">Solve</RouterLink>
    </nav>
    <RouterView />
</template>

<style scoped>
nav {
    display: flex;
    gap: 10px;
}

nav a {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 10px;
    color: blue;
}
nav a.router-link-active {
    background-color: aquamarine;
}
nav a:hover {
    border-color: aquamarine;
}
</style>
