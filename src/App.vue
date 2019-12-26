<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import Bus from "../src/utils/bus.js";

export default {
  name: "app",
  components: { ToolBar, Spinner },
  data() {
    return {
      loadingStatus: false
    };
  },
  created() {
    Bus.$on("start:spinner", this.startSpinner);
    Bus.$on("end:spinner", this.endSpinner);
  },
  mounted() {},
  beforeDestroy() {
    Bus.$off("start:spinner", this.startSpinner);
    Bus.$off("end:spinner", this.endSpinner);
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
    fetchData() {
      console.log("hello");
    }
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
