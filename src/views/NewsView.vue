<template>
  <div>
    <list-item></list-item>
  </div>
</template>
<script>
import ListItem from "../components/ListItem.vue";
import Bus from "../utils/bus.js";

export default {
  components: {
    ListItem
  },
  //HOC 적용으로 인한 불필요.
  // created() {
  //   Bus.$emit("start:spinner");
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch("FETCH_NEWS")
  //       .then(() => {
  //         Bus.$emit("end:spinner");
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, 3000);
  // },
  mounted() {}
};
</script>
