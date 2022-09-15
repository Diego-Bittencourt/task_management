<template>
  <li>
    <base-card>
      <h1>TASK: {{ taskcontent }}</h1>
      <div class="taskdata">
      <div class="column">
        <p>Sent by: {{ tasksender }}</p>
        <p>Date: {{ taskdate }}</p>
      </div>
      <div class="column">
      <p>STATUS: {{ taskstatus }}</p>
      <p>Topic: {{ tasktags }}</p>
      </div>
      </div>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["tasksender", "taskcontent", "taskdate", "taskstatus", "tasktags"],
};
</script>

<style scoped>
.taskdata {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
}

.column {
  text-align: left;
}
</style>