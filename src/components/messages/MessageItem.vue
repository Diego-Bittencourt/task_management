<template>
  <li>
    <base-card>
      <h2>From: {{ sender }}</h2>
      <h2>Date: {{ date }}</h2>
      <p>{{ msgcontent }}</p>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["sender", "msgcontent", "date"],
};
</script>
