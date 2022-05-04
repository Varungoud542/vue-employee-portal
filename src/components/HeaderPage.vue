<template>
  <div class="Header-bar">
    <span @click="logout()">Logout</span>
    <span @click="goToleave()">Leave</span>
    <span @click="goTohome()">Home</span>
    <span @click="goToStudents()">Students</span>
  </div>
</template>
<script>
export default {
  name: "HeaderPage",
  methods: {
    logout() {
      localStorage.removeItem("currentUser");
      this.$router.push("LoginPage");
      localStorage.removeItem("upDatedUser");
    },
    goToleave() {
      this.$router.push("LeavePage");
    },
    goTohome(){
        this.$router.push("HomePage")
    },
    goToStudents(){
        this.$router.push("StudentsPage")
    }
  },
};
</script>
<style>
.Header-bar {
  background-color: black;
}
span {
  color: white;
  margin-left: 65px;
  margin-right: 65px;
}
</style>
