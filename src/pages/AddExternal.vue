<template>
<base-card>
  <form @submit.prevent="addNewStudent" v-if="!dataSent">
    <h1>Student's information</h1>
    <p>The Rainbow International School is going through renovation and we would like to ask to confirm the student's contact info.</p>
    <p>Please, insert the contact info and let's connect.</p>
    <p>（ロマ字）</p>
    <div class="form-control">
      <label for="studentname">Name</label>
      <input type="text" v-model.trim="studentName" />
    </div>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" v-model.trim="studentEmail" />
    </div>
    <div class="form-control">
      <label for="phone">Phone</label>
      <input type="phone" v-model.trim="studentPhone" />
    </div>
    <div class="form-control">
      <label for="classday">Class - Day</label>
      <select name="classday" id="classday" v-model="studentClassDay">
        <option name="sunday">Sunday</option>
        <option name="monday">Monday</option>
        <option name="tuesday">Tuesday</option>
        <option name="wednesday">Wednesday</option>
        <option name="thursday">Thursday</option>
        <option name="friday">Friday</option>
        <option name="saturday">Saturday</option>
      </select>
      </div>
    <div class="form-control">
      <label for="class">Class - Time</label>
      <input type="time" v-model.trim="studentClassTime" />
    </div>
    <base-button>Submit</base-button>
  </form>
  <div v-else>
    <p>Thank you for your information.</p>
  </div>

  </base-card>
</template>

<script>
export default {
    data() {
        return {
            studentName: "",
            studentEmail: "",
            studentPhone: "",
            studentClassTime: "",
            studentClassDay: "",
            isFormValid: true,
            dataSent: false
        }
    },
    methods: {
        async addNewStudent() {
            this.isFormValid = true;

            //check for valid inputs
            if (this.studentName === "" || 
                this.studentEmail === "" ||
                this.studentPhone === "" ||
                this.studentClassTime === "" ||
                this.studentClassDay === "") {
                    this.isFormValid = false;
                    return
                }

            const newStudent = {
                studentName: this.studentName,
                studentEmail: this.studentEmail,
                studentPhone: this.studentPhone,
                studentClass: this.studentClassDay + ", " + this.studentClassTime
            }

            this.$store.dispatch("students/addStudent", newStudent);
            this.dataSent = true;
        }
    }
}
</script>

<style scoped>
p {
  text-align: left;
  margin: 0.8rem 0;
}

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
