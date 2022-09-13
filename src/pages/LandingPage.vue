<template>
    <h1>Welcome, {{userName}}.</h1>
    <h1>TESTANDOOOO</h1>
</template>

<script>
export default {
    computed: {
        userName() {
            return this.$store.getters.getUserName;
            // return "isso"
        }
    }
}
</script>