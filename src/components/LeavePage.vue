<script>
// import Vue from "vue";
export default {
  name: 'LeavePage',
  data () {
    return {
      employeesDetails: [],
      currentUser: {}
    }
  },
  created () {
    this.employeesDetails = JSON.parse(localStorage.getItem('employees'))
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (this.currentUser.role === 'user') {
      this.employeesDetails = this.employeesDetails.filter(
        emp => emp.id == this.currentUser.id
      )
    }
  },
  methods: {
    approvedOrRejected (employee, updatedStatus) {
      employee.status = updatedStatus
      localStorage.setItem('employees', JSON.stringify(this.employeesDetails))
    }
  }
}
</script>
<template>
  <div>
    <table>
      <tr>
        <th>NAME</th>
        <th>AGE</th>
        <th>POSITION</th>
        <th>leaveDuration</th>
        <th>LEAVETYPE</th>
        <th>ROLE</th>
        <th>ID</th>
        <th>STATUS</th>
      </tr>
      <tr
        v-for="(employeeDetails, index) in employeesDetails"
        :key="employeeDetails.id"
      >
        <td>{{ employeeDetails.name }}</td>
        <td>{{ employeeDetails.age }}</td>
        <td>{{ employeeDetails.position }}</td>
        <td>{{ employeeDetails.leaveDuration }}</td>
        <td>{{ employeeDetails.leaveType }}</td>
        <td>{{ employeeDetails.role }}</td>
        <td>{{ employeeDetails.id }}</td>
        <td>{{ employeeDetails.status }}</td>
        <td
          v-if="
            employeeDetails.status == 'Pending' && currentUser.role == 'admin'
          "
        >
          <v-btn
            class="custom-btn"
            color="primary"
            @click="approvedOrRejected(employeeDetails, 'Approved', index)"
            >Approve
          </v-btn>
        </td>
        <td
          v-if="
            employeeDetails.status == 'Pending' && currentUser.role == 'admin'
          "
        >
          <v-btn
            class="custom-btn"
            color="error"
            @click="approvedOrRejected(employeeDetails, 'Rejected', index)"
          >
            Reject
          </v-btn>
        </td>
      </tr>
    </table>
  </div>
</template>
<style>
.custom-btn {
  width: 100px;
}
</style>
