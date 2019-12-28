<template>
  <div>
    <list-item></list-item>
  </div>
</template>
<script>
// import { mapState, mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";
import ListMixins from "../mixins/ListMixin.js";

export default {
  components: {
    ListItem
  },
  mixins:[ListMixins],
  computed: {
    //# 4
    // ...mapGetters(["fetchedAsk"])
    //# 3
    // ...mapGetters({
    //   fetchedAsk: "fetchedAsk"
    // })
    //# 2
    // ...mapState({
    //   asks: state => state.asks
    // })
    //#1
    //ask(){
    //return this.$store.state.asks
    //}
  }

  // created() {
  //   Bus.$emit("start:spinner");
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch("FETCH_ASK")
  //       .then(() => {
  //         Bus.$emit("end:spinner");
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, 3000);
  // }
};
</script>

