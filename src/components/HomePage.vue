<script>
export default {
  name: "HomePage",
  data() {
    return {
      employeesDetails: [],
      currentUser: {},
      positions: [
        { role: "JR.Developer", name: "Dylan greene" },
        { role: "Developer", name: "Dyayana rooma" },
        { role: "backend developer", name: "chikky dud" },
      ],
      stats: [
        { position: "developer", name: "varun" },
        { position: "backend developer", name: "sandeep" },
        { position: "CEO", name: "tinku" },
        { position: "developer", name: "chinni" },
      ],
      isPositionsActive: true,
    };
  },
  created() {
    this.employeesDetails = JSON.parse(localStorage.getItem("employees"));
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.currentUser);
    if (this.currentUser.role === "admin") {
      console.log("its an admin");
    } else {
      this.employeesDetails = this.employeesDetails.filter(
        (emp) => emp.id == this.currentUser.id
      );
      console.log(this.employeesDetails);
    }
  },
  methods: {
    showPositionOrStatus(flag) {
      this.isPositionsActive = flag;
    },
  },
};
</script>
<template>
  <div>
    <div>
      <div class="interviewDiv">
        <button
          class="stylesForPositions"
          @click="showPositionOrStatus(true)"
          v-bind:class="{ btnActive: isPositionsActive }"
        >
          OPEN POSITION
        </button>
        <button
          class="stylesForStatus"
          @click="showPositionOrStatus(false)"
          v-bind:class="{ btnActive: !isPositionsActive }"
        >
          status
        </button>
      </div>
      <div class="interviewerDetails">
        <table v-if="this.isPositionsActive == true">
          <tr>
            <th>POSITION</th>
            <th>NAME</th>
          </tr>
          <tr v-for="position in positions" :key="position.name">
            <td>{{ position.role }}</td>
            <td>{{ position.name }}</td>
          </tr>
        </table>
      </div>
      <div class="interviewerDetails">
        <table v-if="this.isPositionsActive == false">
          <tr>
            <th>POSITION</th>
            <th>NAME</th>
          </tr>
          <tr v-for="stat in stats" :key="stat.name">
            <td>{{ stat.position }}</td>
            <td>{{ stat.name }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<style>
.interviewDiv {
  display: flex;
  justify-content: center;
}
.interviewerDetails {
  display: flex;
  justify-content: center;
}
tr,
th,
td {
  padding: 10px;
}
table {
  text-align: center;
}
.stylesForPositions {
  border: none;
  padding: 5px 15px;
  color: black;
  border-radius: 2px;
}
.stylesForStatus {
  border: none;
  padding: 5px 15px;
  color: black;
  border-radius: 2px;
}
.btnActive {
  background-image: linear-gradient(to right, #6585ff, #8cb3ff);
  color: white;
}
</style>
