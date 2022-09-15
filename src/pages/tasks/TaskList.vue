<template>
<task-form @reloadTasks="loadTasks"></task-form>
<h1 v-if="isLoading">Loading...</h1>
  <ul v-else>
    <task-item
      v-for="task in tasks"
      :key="task.content"
      :taskcontent="task.taskContent"
      :tasksender="task.taskAuthor"
      :tasktags="task.taskTopic"
      :taskdate="task.taskDate"
      :taskstatus="task.taskStatus"
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
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    tasks() {
      return this.$store.getters["tasks/getTasks"];
    },
  },
  created() {
    this.loadTasks();
  },
  methods: {
    async loadTasks() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('tasks/getTasks');
      }// end of the try
        catch(error) {
          this.error = error.message || 'Something went wrong';
        }// end of the catch
      this.isLoading = false; 
    }
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