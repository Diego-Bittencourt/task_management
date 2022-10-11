<template>
<base-card>
<auth-log v-if="!isLoggedIn"></auth-log>
  <div v-if="isLoggedIn">
  <h1>Welcome, {{ userName }}.</h1>
  <p>
    This is the task platform to enhance the communication with the school
    staff.
  </p>
  <p>Thank you for your time and effort. If there is anything we can help, send a message to Diego.</p>
  </div>
  </base-card>
  
</template>

<script>
import AuthLog from '../components/auth/AuthLog.vue';
export default {
  components: {
    AuthLog
  },
  computed: {
    userName() {
      return this.$store.getters.getUserName;
      // return "isso"
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    isSignUpAvailable() {
      return this.$store.getters.getSignUp;
    }
  },
  created() {
    this.fetchSignUp();
  },
  methods: {
    async fetchSignUp() {
      this.$store.dispatch('fetchSignUp');
    }
  }
};
</script>

<style scoped>
p {
  margin: 2rem auto;
  text-align: justify;
}

</style>
