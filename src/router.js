import Vue from "vue";
import Route from "vue-router";
import HelloWorld from "./components/HelloWorld";
import A from "./components/A";
// import B from "./components/B";

Vue.use(Route);
const routes = [
  { path: "/a", component: A, meta: { title: "A" } },
//   { path: "/b", component: B },
  {
    path: "/hello-world",
    component: HelloWorld,
    meta: { title: "HelloWorld" },
  },
];
const router = new Route({
  routes,
});

/* eslint-disable */
Vue.mixin({
  beforeCreate() {
    console.log("beforeEach", this.$router, this.$route);
    if (this.$route.meta.title) {
      document.title = this.$route.meta.title;
    } else {
      document.title = "this not have a title";
    }
  },
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach", to, from);
//   if (this.$route.meta.title) {
//     document.title = this.$route.meta.title;
//   } else {
//     document.title = "this not have a title";
//   }
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
