<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      name: '',
      id: '',
      password: '',
      nameRules: [v => !!v || 'Name is required'],
      emailRules: [v => !!v || 'ID is required'],
      passwordRules: [v => !!v || 'Password is required'],
      employees: [
        {
          name: 'varun',
          age: 21,
          position: 'developer',
          leaveDuration: '20-23 jan',
          leaveType: 'common',
          role: 'admin',
          id: 201,
          status: 'Pending'
        },
        {
          name: 'sucharitha',
          age: 29,
          position: 'developer',
          leaveDuration: '20-23 fab',
          leaveType: 'common',
          role: 'admin',
          id: 202,
          status: 'Pending'
        },
        {
          name: 'kanny',
          age: 21,
          position: 'ceo',
          leaveDuration: '20-23 mar',
          leaveType: 'common',
          role: 'user',
          id: 203,
          status: 'Pending'
        },
        {
          name: 'siddagoud',
          age: 49,
          position: 'developer',
          leaveDuration: '20-23 apl',
          leaveType: 'common',
          role: 'admin',
          id: 204,
          status: 'Pending'
        },
        {
          name: 'tinku',
          age: 29,
          position: 'developer',
          leaveDuration: '20-23 may',
          leaveType: 'common',
          role: 'member',
          id: 205,
          status: 'Pending'
        },
        {
          name: 'chinni',
          age: 21,
          position: 'developer',
          leaveDuration: '20-23 jun',
          leaveType: 'common',
          role: 'admin',
          id: 206,
          status: 'Pending'
        },
        {
          name: 'padhma',
          age: 39,
          position: 'developer',
          leaveDuration: '20-23 July',
          leaveType: 'common',
          role: 'member',
          id: 207,
          status: 'Pending'
        }
      ]
    }
  },
  created () {
    localStorage.setItem('employees', JSON.stringify(this.employees))
  },
  methods: {
    login () {
      let index = this.employees.findIndex(
        employee => employee.id === Number(this.id)
      )
      if (index === -1) {
        console.log('user not found')
        return
      }
      localStorage.setItem('currentUser', JSON.stringify(this.employees[index]))
      this.$router.push('HomePage')
    }
  }
}
</script>
<template>
  <v-row justify="center">
    <v-col cols="12" md="4">
      <v-form ref="form" class="login-form">
        <v-text-field
          :rules="nameRules"
          v-model="name"
          label="User Name"
        ></v-text-field>
        <v-text-field
          :rules="emailRules"
          v-model="id"
          label="Id"
        ></v-text-field>
        <v-text-field
          type="password"
          :rules="passwordRules"
          v-model="password"
          label="Password"
        ></v-text-field>
        <v-btn
          :disabled="!name || !id || !password"
          @click="login()"
          color="primary"
          >Submit</v-btn
        >
      </v-form>
    </v-col>
  </v-row>
</template>
<style>
.login-form {
  margin: 20px;
}
</style>
