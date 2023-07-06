<template>
    <div class="card">
        <img :src="image" class="icon" alt="">
        <h3>{{ title }}</h3>
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<style scoped>
    img {
        width: 100px;
    }
</style>

<script setup>
    const { title, image } = defineProps(['title', 'image'])
</script>