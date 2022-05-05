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
    component: LoginPage,
  },
  {
    path: "/shareData",
    component: ShareData,
  },
  {
    path: "/LoginPage",
    component: LoginPage,
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
    path:"/StudentsPage",
    component:StudentsPage,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
