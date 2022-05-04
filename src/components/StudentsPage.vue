<script>
export default {
  name: "StudentsPage",
  data() {
    return {
      students: [
        {
          name: "sucharitha",
          class: 10,
          age: 20,
        },
        {
          name: "varun",
          class: 11,
          age: 21,
        },
        {
          name: "tinku",
          class: 12,
          age: 22,
        },
        {
          name: "kanny",
          class: 13,
          age: 24,
        },
      ],
      isConditionTrue: false,
      clickedStudentDetails:{},
    };
  },
  methods: {
    editStudent() {
      this.isConditionTrue = true;
    },
    submitDetails() {},
    deleteStudent(i) {
      this.students.splice(i, 1);
    },
  },
  created() {
    this.clickedStudentDetails = Object.assign({},this.clickedStudentDetails)
    console.log(this.clickedStudentDetails)
  },
};
</script>
<template>
  <div>
    <div>
      <table>
        <tr>
          <th>NAME</th>
          <th>CLASS</th>
          <th>AGE</th>
        </tr>
        <tr v-for="(student, index) in students" :key="student.class">
          <td>{{ student.name }}</td>
          <td>{{ student.class }}</td>
          <td>{{ student.age }}</td>
          <button @click="editStudent(student)">Edit</button>
          <button @click="deleteStudent(index)">Delete</button>
        </tr>
      </table>
    </div>
    <div v-if="isConditionTrue == true">
      <input v-model="clickedStudentDetails.name" />
      <input v-model="clickedStudentDetails.class" />
      <input v-model="clickedStudentDetails.age" />
      <button click="submitDetails()">submit</button>
    </div>
  </div>
</template>
