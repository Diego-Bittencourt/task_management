<template>
<base-card>
{{isSignUpAvailable}}
<auth-log v-if="!isLoggedIn"></auth-log>
  <div v-if="isLoggedIn">
  <h1>Welcome, {{ userName }}.</h1>
  <p>
    This is the task platform to enhance the communication with the school
    staff.
  </p>
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
