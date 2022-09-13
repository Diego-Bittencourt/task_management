<template>
    {{getMessages}}
</template>

<script>
export default {
    computed: {
        getMessages() {
            return this.$store.getters['messages/getMessages'];
        }
    }
}
</script>