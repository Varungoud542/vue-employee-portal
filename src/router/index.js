import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import ShareData from "../components/ShareData.vue";
import HomePage from "../components/HomePage.vue";
import LeavePage from "../components/LeavePage.vue";
import StudentsPage from "../components/StudentsPage.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/shareData",
    name: "ShareData",
    component: ShareData,
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/LeavePage",
    name: "LeavePage",
    component: LeavePage,
  },
  {
    path:"/StudentsPage",
    nme:"StudentsPage",
    component:StudentsPage,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
