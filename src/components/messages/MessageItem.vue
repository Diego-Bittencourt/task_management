<template>
  <li>
    <base-card>
      <div class="msgdata"><h2>From: {{ sender }}</h2>
      <h2>Date: {{ date }}</h2>
      </div>
      <p>{{ msgcontent }}</p>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["sender", "msgcontent", "date"],
};
</script>

<style scoped>
.msgdata {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 2rem;
}
</style>