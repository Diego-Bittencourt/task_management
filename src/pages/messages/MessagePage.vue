<template>
  <ul>
    <message-form></message-form>
    <base-card v-if="!iMessagesListEmpty">Sorry, no messages to show.</base-card>
    <h1 v-if="isLoading">Loading...</h1>
    <message-item
      v-for="message in getMessages"
      :key="message.id"
      :sender="message.messageAuthor"
      :msgcontent="message.messageContent"
      :date="message.messageDate"
      :title="message.messageTitle"
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
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    getMessages() {
      return this.$store.getters["messages/getMessages"];
    },
    iMessagesListEmpty() {
      return Object.keys(this.getMessages).length;
    },
    getUserName() {
      return this.$store.getters.getUserName;
    }
  },
  methods: {
    async loadMessages() {

      //setting page to loading
      this.isLoading = true;
      let userName = this.getUserName;

      try {
        //fetching messages from firebase
        this.$store.dispatch('messages/getMessages', userName);

      } catch (error) {

        
        this.error = error.message || "Something went wrong";
      }// end of the catch

      this.isLoading = false;

    }
  },
  created() {
    this.loadMessages();
  }
};
</script>

<style scoped>
ul,
li {
  
  text-indent: 0;
  list-style-type: none;
}
</style>
