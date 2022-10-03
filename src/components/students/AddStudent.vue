<template>
<base-card>
  <form @submit.prevent="addNewStudent">
    <h1>Add Student</h1>
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
      <label for="class">Class - Day, Time</label>
      <input type="text" v-model.trim="studentClass" />
    </div>
    <base-button>Submit</base-button>
  </form>
  </base-card>
</template>

<script>
export default {
    data() {
        return {
            studentName: "",
            studentEmail: "",
            studentPhone: "",
            studentClass: "",
            isFormValid: true
        }
    },
    methods: {
        async addNewStudent() {
            this.isFormValid = true;

            //check for valid inputs
            if (this.studentName === "" || 
                this.studentEmail === "" ||
                this.studentPhone === "" ||
                this.studentClass === "") {
                    this.isFormValid = false;
                    return
                }

            const newStudent = {
                studentName: this.studentName,
                studentEmail: this.studentEmail,
                studentPhone: this.studentPhone,
                studentClass: this.studentClass
            }

            this.$store.dispatch("students/addStudent", newStudent);
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
