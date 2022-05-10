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
      nameRules: [v => !!v || 'Name is required'],
      classRules: [
        v => !!v || 'class is required',
        v => (v > 1 && v <= 20) || 'class should be between 1 and 20'
      ],
      ageRules: [
        v => !!v || 'age is required',
        v => (v > 3 && v <= 60) || 'Age should be between 3 and 60'
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
              :rules="nameRules"
            ></v-text-field>
            <v-text-field
              v-model="activeStudent.class"
              label="class"
              :rules="classRules"
            ></v-text-field>
            <v-text-field
              v-model="activeStudent.age"
              label="age"
              :rules="ageRules"
            ></v-text-field>
            <v-btn
              :disabled="
                !activeStudent.name ||
                  !activeStudent.class ||
                  !activeStudent.age
              "
              @click="submitDetails()"
              color="primary"
              >Submit</v-btn
            >
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>NAME</th>
            <th>CLASS</th>
            <th>AGE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="student.class">
            <td>{{ student.name }}</td>
            <td>{{ student.class }}</td>
            <td>{{ student.age }}</td>
            <td>
              <v-icon @click="editStudent(student, index)">
                mdi-pencil
              </v-icon>
              <v-icon @click="deleteStudent(index)">
                mdi-delete
              </v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<style>
.edit-btn {
  color: white !important;
}
tbody {
  text-align: left;
}
</style>
