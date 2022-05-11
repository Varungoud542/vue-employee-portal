import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import Handsontable from 'handsontable/base';
import 'handsontable/dist/handsontable.min.css';


Vue.config.productionTip = false

new Vue({
  router: router,
  vuetify,
  Handsontable,
  render: (h) => h(App)
}).$mount("#app");