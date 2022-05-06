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
          <td>
            <v-icon @click="editStudent(student, index)">
              mdi-pencil
            </v-icon>
            <v-icon @click="deleteStudent(student)">
              mdi-delete
            </v-icon>
          </td>
        </tr>
      </table>
    </div>
    <v-dialog v-model="isEdited" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Student</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field
              v-model="activeStudent.name"
              label="User Name"
            ></v-text-field>
            <v-text-field
              v-model="activeStudent.class"
              label="class"
            ></v-text-field>
            <v-text-field
              v-model="activeStudent.age"
              label="age"
            ></v-text-field>
            <v-btn @click="submitDetails()" color="primary">Submit</v-btn>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<style>
.edit-btn {
  color: white !important;
}
</style>
