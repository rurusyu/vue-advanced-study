<template>
  <div>
  <ul class="news-list">
      <li class="post" v-for="item in fetchedAsk">
        <div class="points">
          {{item.points}}
        </div>

        <!-- 기타 정보영역 -->
        <div>
          <p class="news-title">
           <router-link :to="`item/${item.id}`">
            {{ item.title}}
           </router-link>
             
          </p>
          <small class="link-text"> 
            {{ item.time_ago }} by
            <router-link  class="link-text" :to="'/user/'+item.user"> {{ item.user }} </router-link> 
          </small>
        </div>
      </li>
    </ul>
    
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
<style>
.news-list {
  margin:0;
  padding:0;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#42b883;
}
.news-title{
  margin: 0;
}
.link-text{
  color:#828282;
}
</style>
