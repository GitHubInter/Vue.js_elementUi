<template>
  <div>
    <p>Componment A</p>
    <button @click="addRoute">AddRoute</button><br>
    <router-link to="/b">to B page</router-link>
  </div>
</template>

<script>
import B from "./B";
/* eslint-disable */
export default {
  methods: {
    addRoute() {
      this.$router.addRoutes([{ path: "/b", component: B }]);
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeRouteEnter(to, from, next) {
    // 不能获取组件实例 `this`
    console.log("beforeRouteEnter", to, from);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate", to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave", to, from);
    next();
  },
};
</script>