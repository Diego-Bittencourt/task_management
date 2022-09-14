<template>
    <h1>TASK: {{ taskcontent }}</h1>
    <p>Date: {{ taskdate }}</p>
    <p>Sent by: {{ tasksender }}</p>
    <p>STATUS: {{ taskstatus }}</p>
    <p>Topic: {{ tasktags }}</p>
</template>

<script>
export default {
    props: ['tasksender', 'taskcontent', 'taskdate', 'taskstatus', 'tasktags']
}
</script>