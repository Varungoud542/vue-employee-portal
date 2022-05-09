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
    <v-simple-table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>AGE</th>
          <th>POSITION</th>
          <th>LEAVEDURATION</th>
          <th>LEAVETYPE</th>
          <th>ROLE</th>
          <th>ID</th>
          <th>STATUS</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
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
              v-if="
                employeeDetails.status == 'Pending' &&
                  currentUser.role == 'admin'
              "
            >
              Approve
            </v-btn>
            <v-btn
              class="custom-btn"
              color="error"
              @click="approvedOrRejected(employeeDetails, 'Rejected', index)"
            >
              Reject
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<style>
.custom-btn {
  width: 100px;
}
tbody {
  text-align: left;
}
</style>
