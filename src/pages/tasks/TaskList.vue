<template>
    {{tasks}}
</template>

<script>
export default {
    computed: {
        tasks() {
            return this.$store.getters['tasks/getTasks'];
        }
    }
}
</script>