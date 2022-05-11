import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import ShareData from "../components/ShareData.vue";
import HomePage from "../components/HomePage.vue";
import LeavePage from "../components/LeavePage.vue";
import StudentsPage from "../components/StudentsPage.vue";
import EmployeePage from "../components/EmployeePage.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LoginPage,
    meta: {
      showHeader: -1,
    },
  },
  {
    path: "/shareData",
    component: ShareData,
  },
  {
    path: "/LoginPage",
    component: LoginPage,
    meta: {
      showHeader: -1,
    },
  },
  {
    path: "/HomePage",
    component: HomePage,
  },
  {
    path: "/LeavePage",
    component: LeavePage,
  },
  {
    path: "/StudentsPage",
    component: StudentsPage,
  },
  {
    path:'/employee',
    component:EmployeePage
  }
];

const router = new VueRouter({
  routes,
});

export default router;
