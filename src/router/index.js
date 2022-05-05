import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import ShareData from "../components/ShareData.vue";
import HomePage from "../components/HomePage.vue";
import LeavePage from "../components/LeavePage.vue";
import StudentsPage from "../components/StudentsPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/shareData",
    component: ShareData,
    meta: {
      page: 1,
    },
  },
  {
    path: "/LoginPage",
    component: LoginPage,
    meta: {
      page: -1,
    },
  },
  {
    path: "/HomePage",
    component: HomePage,
    meta: {
      page: 3,
    },
  },
  {
    path: "/LeavePage",
    component: LeavePage,
    meta: {
      page: 4,
    },
  },
  {
    path: "/StudentsPage",
    component: StudentsPage,
    meta: {
      page: 5,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
