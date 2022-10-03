<template>
<base-card>
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
      <tr>
        <td>Someone</td>
        <td>something@server.com</td>
        <td>0000000000</td>
        <td>Sunday, 9AM</td>
      </tr>
    </tbody>
  </table>
</base-card>
</template>

<style scoped>

h1 {
  margin-bottom: 2rem;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #909090;
}
th,
td {
  border: 1px solid #909090;
  padding: 0.1rem 1rem;
}

</style>