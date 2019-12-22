<template>
  <div>
    <div v-for="ask in fetchedAsk">{{ ask.title }}</div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    //# 4
    ...mapGetters(["fetchedAsk"])

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
  },

  created() {
    this.$store.dispatch("FETCH_ASK");
  }
};
</script>
<style></style>
