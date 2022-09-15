<template>
<task-form></task-form>
  <ul>
    <task-item
      v-for="task in tasks"
      :key="task.content"
      :taskcontent="task.content"
      :tasksender="task.from"
      :tasktags="task.tag"
      :taskdate="task.date"
      :taskstatus="task.status"
    ></task-item>
  </ul>
</template>

<script>
import TaskItem from "../../components/tasks/TaskItem.vue";
import TaskForm from "../../components/tasks/TaskForm.vue";
export default {
  components: {
    TaskItem,
    TaskForm
  },
  computed: {
    tasks() {
      return this.$store.getters["tasks/getTasks"];
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