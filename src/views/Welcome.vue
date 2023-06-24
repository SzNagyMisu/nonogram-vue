<script setup>
</script>

<template>
    <h1>Nonogram</h1>
    <p>
        Welcome to my nonogram application where you can
        <RouterLink :to="{ name: 'create' }">create</RouterLink>
        or
        <RouterLink :to="{ name: 'solve' }">solve</RouterLink>
        nonogram puzzles.
    </p>
    <p>Have fun!</p>
</template>

<style scoped>
</style>
