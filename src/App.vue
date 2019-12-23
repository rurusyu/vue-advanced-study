<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>

    </transition>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  name: "app",
  components: { ToolBar },
  methods: {
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
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
