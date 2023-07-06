<template>
    <a href="#" :class="class"><slot></slot></a>
</template>

<script>
    export default {
        props: [class]
    }
</script>

<style>
.btn {
    --font-color: var(--black);
    --bg-color: var(--white);
    --border-color: var(--black);
    display: inline-block;
    box-shadow: 0px 0px 2rem #3332;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    color: var(--font-color);
    border: 1px solid var(--border-color);
    background-color: var(--bg-color);
}

.btn:hover {
    box-shadow: 0px 0px 4rem #3332;
    transform: translateY(-0.1rem);
    text-decoration: none;
    color: var(--bg-color);
    border: 1px solid var(--font-color);
    background-color: var(--font-color);
}

.btn.primary {
    --font-color: var(--black);
    --bg-color: var(--green);
}
</style>