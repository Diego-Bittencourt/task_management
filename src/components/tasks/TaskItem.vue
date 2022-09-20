<template>
  <li>
    <base-card>
      <h1>TASK: {{ taskcontent }}</h1>
      <div class="taskdata">
        <div class="column">
          <p>Sent by: {{ tasksender.toUpperCase() }}</p>
          <p><base-badge :format="tasktags">{{ tasktags.toUpperCase() }}</base-badge></p>
        </div>
        <div class="column">
          <p><base-badge :format="taskstatus">{{ taskstatus.toUpperCase() }}</base-badge></p>
          
        </div>
        
      </div>
      <p class="taskdate">Date: {{ taskdate }}</p>
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

p {
  margin-top: 0.8rem;
}

.taskdate {
  color: #999;
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: right;
}
</style>
