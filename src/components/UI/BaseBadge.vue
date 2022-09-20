<template>
    <div :class="format">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['format']
}
</script>

<style scoped>
div {
    padding: 0.5rem 1rem;
    border-radius: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: default;
}

.payment {
    background-color: rgb(255, 200, 106);
    color: #444;
}

.trial {
    background-color: rgb(255, 166, 166);
    color: #444;
}

.schedule {
    background-color: rgb(141, 171, 255);
    color: #444;
}

.other {
    background-color: rgb(134, 255, 196);
    color: #444;
}

.done {
    background-color: rgb(0, 197, 0);
    color: #ddd;
}

.pending {
    background-color: rgb(152, 33, 0);
    color: #ddd;
}

.processing {
    background-color: rgb(181, 181, 0);
    color: #ddd;
}
</style>