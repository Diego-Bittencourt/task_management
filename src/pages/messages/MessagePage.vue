<template>
  <ul>
    <message-form></message-form>
    <message-item
      v-for="message in getMessages"
      :key="message.content"
      :sender="message.from"
      :msgcontent="message.content"
      :date="message.date"
    ></message-item>
  </ul>
</template>

<script>
import MessageItem from "../../components/messages/MessageItem.vue";
import MessageForm from "../../components/messages/MessageForm.vue";
export default {
  components: {
    MessageItem,
    MessageForm
  },
  computed: {
    getMessages() {
      return this.$store.getters["messages/getMessages"];
    },
  },
};
</script>

<style scoped>
ul,
li {
  
  text-indent: 0;
  list-style-type: none;
}
</style>
