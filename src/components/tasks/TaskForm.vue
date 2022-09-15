<template>
<p>{{ taskDate }}</p>
<p>{{ getUserName }}</p>
<p>{{ taskContent }}</p>
<p>{{ taskStatus }}</p>
<p>{{ taskTopic }}</p>

<base-card>
  <form @submit.prevent="createTask">
    <h1>Create a Task</h1>
    <div class="form-control">
    <label for="topic">Choose a topic</label>
    <select name="topic" id="topic" v-model="taskTopic">
      <option disabled value="">Select one ...</option>
      <option value="payment">Payment</option>
      <option value="trialclass">Trial Class</option>
      <option value="schedule">Class Schedule</option>
      <option value="other">Other</option>  
    </select> 
    </div>
    <div class="form-control">
      <label for="task">Task</label>
      <textarea id="task" rows="5" v-model.trim="taskContent"></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">
      Please enter a valid email and message.
    </p>
    <div class="actions">
      <!-- <base-button simplebutton>Send Message</base-button> -->
      <base-button simplebutton>Submit</base-button>
    </div>
  </form>
</base-card>
</template>

<script>
export default {
    data() {
        return {
            // userName: this.getUserName,
            taskDate: "this.currentDate",
            taskContent: "",
            taskTopic: "",
            taskStatus: ""
        }
    },
    methods: {
          createTask() {
            console.log("methodsubmit");
            let currentDate = new Date();
            this.taskDate = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
          }
    },
    computed: {
      getUserName() {
        return this.$store.getters.getUserName;
      }
    }
}
</script>

<style scoped>
button {
  margin: 0 auto;
}

.form-control {
  margin: 1.6rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  text-align: left;
}

input,
select,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>