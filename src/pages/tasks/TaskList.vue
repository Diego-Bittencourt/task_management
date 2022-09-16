<template>
<base-card>
<div class="btnwrapper">
  <base-button @click="openTaskForm" v-if="!isFormVisible ">Create Task</base-button>
  <base-button @click="openTaskFilter" v-if="!isFilterVisible">Filter Tasks</base-button>
  <base-button @click="closeAll" v-if="isFilterVisible || isFormVisible">Close</base-button>
</div>
<task-form @reloadTasks="loadTasks"  v-if="isFormVisible"></task-form>
<task-filter  v-if="isFilterVisible" @change-filter="setFilters"></task-filter>
</base-card>
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
import TaskFilter from "../../components/tasks/TaskFilter.vue";


export default {
  components: {
    TaskItem,
    TaskForm,
    TaskFilter
  },
  data() {
    return {
      isLoading: false,
      isFormVisible: false,
      isFilterVisible: false
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
    setFilters(payload) {
      console.log(payload);
    },
    openTaskForm() {
      this.isFormVisible = true;
      this.isFilterVisible = false;
    },
    openTaskFilter() {
      this.isFormVisible = false;
      this.isFilterVisible = true;
    },
    closeAll() {
      this.isFormVisible = false;
      this.isFilterVisible = false;
    },
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

.btnwrapper {
  display: flex;
  justify-content: space-around;
}
</style>