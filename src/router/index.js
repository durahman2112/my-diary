import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import MyDiary from "../views/MyDiary.vue";
import History from "../views/HistoryDiary.vue";
import RandomDiary from "../views/RandomDiary.vue";
import MyEmotion from "../views/MyEmotion.vue";
import Profile from "../views/Profile.vue";
import AboutUs from "../views/AboutUs.vue";
import Login from "../views/Login.vue";
import NewDiary from "../views/NewDiary.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/my-diary",
        name: "MyDiary",
        component: MyDiary,
      },
      {
        path: "/history",
        name: "History",
        component: History,
      },
      {
        path: "/random-diary",
        name: "RandomDiary",
        component: RandomDiary,
      },
      {
        path: "/my-emotion",
        name: "MyEmotion",
        component: MyEmotion,
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "/about-us",
        name: "AboutUs",
        component: AboutUs,
      },
      {
        path: "/new-diary",
        name: "NewDiary",
        component: NewDiary,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
