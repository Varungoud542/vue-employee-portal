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
    },
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
        <v-text-field
          v-model="search"
          label="Search "
        ></v-text-field>
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
