<template>
  <div>
    <div v-for="user in this.$store.state.news">{{ user.title }}</div>
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     users: []
  //   };
  // },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  }
};
</script>
<style></style>
