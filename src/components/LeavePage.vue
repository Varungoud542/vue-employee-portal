<script>
// import Vue from "vue";
export default {
  name: 'LeavePage',
  data () {
    return {
      search: '',
      headers: [
        { text: 'NAME', value: 'name' },
        { text: 'AGE', value: 'age' },
        { text: 'POSITION', value: 'position' },
        { text: 'LEAVEDURATION', value: 'leaveDuration' },
        { text: 'LEAVETYPE', value: 'leaveType' },
        { text: 'Role', value: 'role' },
        { text: 'ID', value: 'id' },
        { text: 'STATUS', value: 'status' },
        { text: 'ACTIONS', value: 'actions' }
      ],
      employeesDetails: [],
      currentUser: {},
      showPopup: false,
      activeEmp: {},
      employeeDetalis: -1
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
      this.activeEmp = employee
      if (updatedStatus === 'Rejected') {
        this.showPopup = true
      } else {
        employee.status = updatedStatus
        localStorage.setItem('employees', JSON.stringify(this.employeesDetails))
      }
    },
    confirmReject () {
      this.activeEmp.status = 'Rejected'
      this.showPopup = false
      localStorage.setItem('employees', JSON.stringify(this.employeesDetails))
    }
  }
}
</script>
<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="employeesDetails"
      :items-per-page="3"
      :search="search"
    >
      <template v-slot:top>
        <v-text-field v-model="search" label="Search "></v-text-field>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn
          class="custom-btn"
          color="primary"
          @click="approvedOrRejected(item, 'Approved')"
          v-if="item.status == 'Pending' && currentUser.role == 'admin'"
        >
          Approve
        </v-btn>
        <v-btn
          class="custom-btn"
          color="error"
          @click="approvedOrRejected(item, 'Rejected')"
          v-if="item.status == 'Pending' && currentUser.role == 'admin'"
        >
          Reject
        </v-btn>
      </template>
    </v-data-table>
    <div>
      <v-dialog v-model="showPopup" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Edit Student</span>
          </v-card-title>
          <v-card-text>
            Do you want to reject this employee leave?
            <v-container>
              <v-btn @click="showPopup = false">
                CANCEL
              </v-btn>
              <v-btn class="ma-1" color="error" plain @click="confirmReject()"
                >Reject</v-btn
              >
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
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
