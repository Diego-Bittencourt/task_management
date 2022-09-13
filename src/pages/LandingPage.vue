<template>
  <h1>Welcome, {{ userName }}.</h1>
  <p>
    This is the task platform to enhance the communication with the school
    staff.
  </p>
  {{ tasks }}
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.getters.getUserName;
      // return "isso"
    },
  },
};
</script>
