<template>
  <div>
    <list-item></list-item>
  </div>
</template>
<script>
// import { mapState, mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem
  },
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
  },

  created() {
    this.$store.dispatch("FETCH_ASK");
  }
};
</script>

