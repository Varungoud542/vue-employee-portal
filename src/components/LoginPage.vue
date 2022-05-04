<script>
export default {
  name: "LoginPage",
  data() {
    return {
      name: "",
      id: "",
      password: "",
      employees: [
        {
          name: "varun",
          age: 21,
          position: "developer",
          leaveDuration: "20-23 jan",
          leaveType: "common",
          role: "admin",
          id: 201,
          status: "Pending",
        },
        {
          name: "sucharitha",
          age: 29,
          position: "developer",
          leaveDuration: "20-23 fab",
          leaveType: "common",
          role: "admin",
          id: 202,
          status: "Pending",
        },
        {
          name: "kanny",
          age: 21,
          position: "ceo",
          leaveDuration: "20-23 mar",
          leaveType: "common",
          role: "user",
          id: 203,
          status: "Pending",
        },
        {
          name: "siddagoud",
          age: 49,
          position: "developer",
          leaveDuration: "20-23 apl",
          leaveType: "common",
          role: "admin",
          id: 204,
          status: "Pending",
        },
        {
          name: "tinku",
          age: 29,
          position: "developer",
          leaveDuration: "20-23 may",
          leaveType: "common",
          role: "member",
          id: 205,
          status: "Pending",
        },
        {
          name: "chinni",
          age: 21,
          position: "developer",
          leaveDuration: "20-23 jun",
          leaveType: "common",
          role: "admin",
          id: 206,
          status: "Pending",
        },
        {
          name: "padhma",
          age: 39,
          position: "developer",
          leaveDuration: "20-23 July",
          leaveType: "common",
          role: "member",
          id: 207,
          status: "Pending",
        },
      ],
    };
  },
  created() {
    localStorage.setItem("employees", JSON.stringify(this.employees));
  },
  methods: {
    login() {
      let index = this.employees.findIndex(
        (employee) => employee.id === Number(this.id)
      );
      if (index === -1) {
        console.log("user not found");
        return;
      }
      localStorage.setItem(
        "currentUser",
        JSON.stringify(this.employees[index])
      );
      this.$router.push("HomePage");
    },
  },
};
</script>
<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ password }}</h1>
    <input placeholder="name" v-model="name" />
    <input placeholder="password" v-model="password" />
    <input placeholder="ID" v-model="id" />
    <button @click="login()">submit</button>
  </div>
</template>
