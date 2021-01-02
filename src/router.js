import Vue from "vue";
import Route from "vue-router";
import HelloWorld from "./components/HelloWorld";
import A from "./components/A";

Vue.use(Route);
const routes = [
  { path: "/a", component: A },
  { path: "/hello-world", component: HelloWorld },
];
const router = new Route({
  routes,
});

/* eslint-disable */
router.beforeEach((to, from, next) => {
  console.log("beforeEach", to, from);
  next();
});

router.beforeResolve((to, from, next) => {
  console.log("beforeResolve", to, from);
  next();
});

router.afterEach((to, from) => {
  console.log("afterEach", to, from);
});

export default router;
