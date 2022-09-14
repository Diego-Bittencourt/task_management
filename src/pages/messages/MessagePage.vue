<template>
    <message-item
    v-for="message in getMessages"
    :key="message.content"
    :sender="message.from"
    :msgcontent="message.content"
    :date="message.date"
    ></message-item>
</template>

<script>
import MessageItem from '../../components/messages/MessageItem.vue';
export default {
    components: {
        MessageItem
    },
    computed: {
        getMessages() {
            return this.$store.getters['messages/getMessages'];
        }
    }
}
</script>