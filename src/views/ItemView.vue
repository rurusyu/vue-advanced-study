<template>
  <div>
      <section>
          <div class="user-container">
              <div>
                  User
              </div>
              <div class="user-description">
                  <router-link :to="`/user/${fetchedItem.id}`">
                     {{fetchedItem.user}}
                  </router-link>
                  <div class="time">
                     {{fetchedItem.time_ago}}
                  </div>
              </div>
          </div>
          <h2>{{fetchedItem.title}}</h2>
      </section>
      <section>
          <!-- 질문 댓글 -->
          <div v-html="fetchedItem.content">
          </div>
      </section>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';

export default {
    computed:{
        // item(){
        //     return this.$store.state.item;
        // }
        ...mapGetters(['fetchedItem'])
    },
    
    created(){
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',itemId);  //payload는 하나만 가능, 여러개 보낼시 객체로 감싸서 보내면됨, 이럴떄 디스트럭쳐링이 좋음
    }
};
</script>
<style scoped>
.user-container{
    display: flex;
    align-items: center;
}

.user-description{
    padding: 8px;
}
.time{
    font-size: 12px;
}
</style>
