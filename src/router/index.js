import Vue from "vue";
import VueRouter from "vue-router";
import ListView from "../views/ListView.vue";
import FormView from "../views/FormView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "list",
    component: ListView,
  },
  {
    path: "/form",
    name: "form",
    component: FormView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
