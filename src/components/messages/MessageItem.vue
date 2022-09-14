<template>
    <h2>From: {{ sender }}</h2>
    <h2>Date: {{ date }}</h2>
    <p>{{ msgcontent }}</p>
</template>

<script>
export default {
    props: ['sender', 'msgcontent', 'date']
}
</script>