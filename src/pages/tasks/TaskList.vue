<template>
    <task-item
    v-for="task in tasks"
    :key="task.content"
    :taskcontent="task.content"
    :tasksender="task.from"
    :tasktags="task.tag"
    :taskdate="task.date"
    :taskstatus="task.status"></task-item>
</template>

<script>
import TaskItem from '../../components/tasks/TaskItem.vue';
export default {
    components: {
        TaskItem
    },
    computed: {
        tasks() {
            return this.$store.getters['tasks/getTasks'];
        }
    }
}
</script>