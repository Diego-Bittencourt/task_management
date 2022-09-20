<template>
<base-card>
    <form @submit.prevent="createMessage">
    <div class="form-control">
    <label for="receiver">Send a message to:</label>
    <select name="receiver" id="receiver" v-model="messageReceiver">
      <option disabled value="">Select one ...</option>
      <option value="diego">Diego</option>
      <option value="lovely">Lovely</option>
      <option value="jeanette">Jeanette</option>
      <option value="shahin">Shahin</option>  
      <option value="meira">Meira</option> 
      <option value="all">All</option> 
    </select> 
    </div>
    <div class="form-control">
      <label for="messagetitle">Title</label>
      <input type="messagetitle" v-model="messageTitle">
    </div>
    <div class="form-control">
      <label for="messagecontent">Message</label>
      <textarea id="messagecontent" rows="5" v-model.trim="messageContent"></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">
      Please enter a valid message, title and receiver.
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
            messageContent: "",
            messageTitle: "",
            messageReceiver: "",
            formIsValid: true
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

.errors {
  color: red;
  font-style: italic;
}
</style>