<template>
  <base-card>
  <label for="filtername">Search for student</label>
  <input type="text" v-model.trim="filterstudent">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in getStudentsList" :key="student.id">
          <td>{{student.studentName}}</td>
          <td>{{student.studentEmail}}</td>
          <td>{{student.studentPhone}}</td>
          <td>{{student.studentClass}}</td>
        </tr>
      </tbody>
    </table>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      filterstudent: ""
    };
  },
  computed: {
    getStudentsList() {
      return this.$store.getters["students/getStudentsList"];
    },
  },
  created() {
    this.fetchStudents();
  },
  methods: {
    fetchStudents() {
      this.$store.dispatch("students/fetchStudentsList");
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #909090;
  border-collapse: collapse;
  margin-top: 2rem;
}
th,
td {
  border: 1px solid #909090;
  padding: 0.1rem 1rem;
}

label,
input {
  width: 100%;
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  font-size: 1.8rem;
  margin-left: 0;
}
</style>
