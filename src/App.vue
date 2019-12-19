<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
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
</style>
