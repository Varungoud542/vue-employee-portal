<script>
export default {
  name: 'StudentsPage',
  data () {
    return {
      activeStudentIndex: -1,
      activeStudent: {},
      students: [
        {
          name: 'sucharitha',
          class: 10,
          age: 20
        },
        {
          name: 'varun',
          class: 11,
          age: 21
        },
        {
          name: 'tinku',
          class: 12,
          age: 22
        },
        {
          name: 'kanny',
          class: 13,
          age: 24
        }
      ],
      isEdited: false
    }
  },
  methods: {
    editStudent (data, i) {
      this.isEdited = true
      this.activeStudent = JSON.parse(JSON.stringify(data))
      this.activeStudentIndex = i
    },
    submitDetails () {
      this.$set(this.students, this.activeStudentIndex, this.activeStudent)
      this.activeStudent = {}
      this.activeStudentIndex = -1
      this.isEdited = false
    },
    deleteStudent (i) {
      this.students.splice(i, 1)
    }
  }
}
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

          <v-btn
            @click="editStudent(student, index)"
            class="edit-btn"
            color="blue"
            >edit</v-btn
          >
          <v-btn @click="deleteStudent(student)" color="error">delete</v-btn>
        </tr>
      </table>
    </div>
    <v-row v-if="isEdited" justify="center">
      <v-col cols="12" md="4">
        <v-form ref="form" class="login-form">
          <v-text-field
            v-model="activeStudent.name"
            label="User Name"
          ></v-text-field>
          <v-text-field
            v-model="activeStudent.class"
            label="class"
          ></v-text-field>
          <v-text-field v-model="activeStudent.age" label="age"></v-text-field>
          <v-btn @click="submitDetails()" color="primary">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.edit-btn {
  color: white !important;
}
</style>
