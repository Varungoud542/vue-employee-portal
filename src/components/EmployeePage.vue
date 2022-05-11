<script>
import { HotTable, HotColumn } from '@handsontable/vue';
// import { htmlRenderer } from 'handsontable/renderers/htmlRenderer';
import { registerAllModules } from 'handsontable/registry';
registerAllModules();
// const CustomRenderer = {
//   template: '<button>Approved</button>',
//   data() {
//     console.log('inside');
//     return {
//       // We'll need to define properties in our data object,
//       // corresponding to all of the data being injected from
//       // the BaseEditorComponent class, which are:
//       // - hotInstance (instance of Handsontable)
//       // - row (row index)
//       // - col (column index)
//       // - prop (column property name)
//       // - TD (the HTML cell element)
//       // - cellProperties (the cellProperties object for the edited cell)
//       hotInstance: null,
//       TD: null,
//       row: null,
//       col: null,
//       prop: null,
//       value: null,
//       cellProperties: null
//     }
//   }
// };
// Handsontable.renderers.registerRenderer('my.custom', CustomRenderer);


export default {
  name: 'EmployeePage',
  data () {
    return {
      employees: [],
      settings: {
        colWidths: 100,
        height: 'auto',
        autoRowSize: false,
        autoColumnSize: false,
        licenseKey: 'non-commercial-and-evaluation',
      }
    }
  },
  created () {
    this.employees = JSON.parse(localStorage.getItem('employees'));
    // this.employees.forEach((rec)=> { return rec.actions = '<button>Approved</button>'})
    
    // console.log(htmlRenderer);
    
    
  },
  components: {
    HotTable,
    HotColumn,
  }
}
</script>

<template>
  <div>
    <hot-table :data="employees" :settings="settings">
      <hot-column title="ID" data="id"> </hot-column>
      <hot-column read-only="true" data="name" title="name"> </hot-column>
      <hot-column title="position" data="position"> </hot-column>
      <hot-column title="role" data="role"> </hot-column>
      <hot-column title="status" data="status"> </hot-column>
      <hot-column title="leaveDuration" data="leaveDuration"> </hot-column>
      <hot-column :width="100" title="leaveType" data="leaveType"> </hot-column>
    </hot-table>
  </div>
</template>
<style></style>
