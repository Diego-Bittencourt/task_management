<template>
  <base-card>
    <div class="btnwrapper">
      <base-button @click="openTaskForm" v-if="!isFormVisible"
        >Create Task</base-button
      >
      <base-button @click="openTaskFilter" v-if="!isFilterVisible"
        >Filter Tasks</base-button
      >
      <base-button @click="closeAll" v-if="isFilterVisible || isFormVisible"
        >Close</base-button
      >
    </div>
    <task-form @reloadTasks="loadTasks" v-if="isFormVisible"></task-form>
    <task-filter
      v-if="isFilterVisible"
      @change-filter="setFilters"
    ></task-filter>
  </base-card>
  <base-card v-if="!iTaskEmpty">Sorry, no tasks to show according your filters</base-card>
  <h1 v-if="isLoading">Loading...</h1>
  <ul v-else>
    <task-item
      v-for="task in filteredTasks"
      :key="task.id"
      :taskId="task.id"
      :taskcontent="task.taskContent"
      :tasksender="task.taskAuthor"
      :tasktags="task.taskTopic"
      :taskdate="task.taskDate"
      :taskstatus="task.taskStatus"
      @reloadTasks="loadTasks"
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
    TaskFilter,
  },
  data() {
    return {
      isLoading: false,
      isFormVisible: false,
      isFilterVisible: false,
      activeFilters: {
        done: true,
        other: true,
        payment: true,
        pending: true,
        processing: true,
        schedule: true,
        trial: true,
      },
    };
  },
  computed: {
    tasks() {
      return this.$store.getters["tasks/getTasks"];
    },
    filteredTasks() {
      //getting the task from firebase
      const tasks = this.$store.getters["tasks/getTasks"];

      //return an array with the filtered array containing the true keys
      return tasks.filter((task) => {
        //the task status in a variable
        let status = task.taskStatus;

        //the task topic in another variable
        let topic = task.taskTopic;

        //checking if the two abose are positive in the activeFilters
        if (this.activeFilters[status] || this.activeFilters[topic]) {
          return true;
        } else {
          //if both topic and status are not true in the activeFilter, return false and not included in the tasks array.
          return false;
        }
      });
    },
    iTaskEmpty() {
      return Object.keys(this.filteredTasks).length;
    }
  },
  created() {
    this.loadTasks();
  },
  methods: {
    setFilters(payload) {
      console.log(payload);
      this.activeFilters = payload;
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
        await this.$store.dispatch("tasks/getTasks");
      } catch (error) {
        // end of the try
        this.error = error.message || "Something went wrong";
      } // end of the catch
      this.isLoading = false;
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

.btnwrapper {
  display: flex;
  justify-content: space-around;
}
</style>
