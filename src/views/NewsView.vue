<template>
  <div>
    <list-item></list-item>
  </div>
</template>
<script>
import ListItem from "../components/ListItem.vue";
import ListMixins from "../mixins/ListMixin.js";

export default {
  components: {
    ListItem
  },

  mixins:[ListMixins],

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
