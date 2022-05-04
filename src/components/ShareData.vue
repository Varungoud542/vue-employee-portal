<script>
export default {
  name: "ShareData",

  data() {
    return {
      employees: [
        { name: "sucharitha", id: 1, age: 28, color: "white", role: "admin" },
        { name: "chinni", id: 2, age: 24, color: "white", role: "member" },
        { name: "varun", id: 3, age: 20, color: "white", role: "admin" },
        { name: "sandeep", id: 4, age: 30, color: "white", role: "member" },
        { name: "tinku", id: 5, age: 26, color: "white", role: "member" },
        { name: "ramya", id: 6, age: 28, color: "white", role: "admin" },
      ],
    };
  },
  mounted() {
    localStorage.setItem("employees", JSON.stringify(this.employees));
  },
};
</script>
<template>
  <h1>hi</h1>
</template>
