<template>
  <ul>
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
export default {
  components: {
    MessageItem,
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
