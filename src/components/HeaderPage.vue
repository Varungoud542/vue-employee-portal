<template>
  <v-app-bar color="blue" >
    <div class="heade-list">
      <div class="header-item" @click="goTohome()">
        Home
      </div>
      <div class="header-item" @click="goToStudents()">Students</div>
      <div class="header-item" @click="goToleave()">Leave</div>
      <div class="header-item" @click="goToemployee()">employees </div>
    </div>
    <div class="header-item" @click="logout()">Logout</div>
  </v-app-bar>
</template>
<script>
export default {
  name: 'HeaderPage',
  methods: {
    logout () {
      localStorage.removeItem('currentUser')
      this.$router.push('LoginPage')
      localStorage.removeItem('upDatedUser')
    },
    goToleave () {
      this.$router.push('LeavePage')
    },
    goTohome () {
      this.$router.push('/HomePage')
    },
    goToStudents () {
      this.$router.push('StudentsPage')
    },
    goToemployee(){
      this.$router.push('employee')
    },
    //  goToEmployeeData(){
    //   this.$router.push('EmployeeData')
    // }
  }
}
</script>
<style>
.header-item {
  margin-left: 20px;
  cursor: pointer;
}
.v-toolbar__content {
  display: flex;
  justify-content: space-between;
  color: white;
}
.heade-list {
  display: flex;
}
</style>
