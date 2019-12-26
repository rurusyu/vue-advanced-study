<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <!-- <div slot="username">{{fetchedItem.user}}</div> -->
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{fetchedItem.user}}</router-link>
        <template slot="time">{{'posted '+fetchedItem.time_ago}}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{fetchedItem.title}}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile";

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(["fetchedItem"])
  },

  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId); //payload는 하나만 가능, 여러개 보낼시 객체로 감싸서 보내면됨, 이럴떄 디스트럭쳐링이 좋음
  }
};
</script>
<style scoped>
.user-container {
  display: flex;
  align-items: center;
}

.user-description {
  padding: 8px;
}
.time {
  font-size: 12px;
}
</style>
