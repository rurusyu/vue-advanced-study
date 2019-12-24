<template>
  <div>
    <user-profile :info="userInfo"></user-profile>
  </div>
</template>
<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },

  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName); //payload는 하나만 가능, 여러개 보낼시 객체로 감싸서 보내면됨, 이럴떄 디스트럭쳐링이 좋음
  }
};
</script>
<style></style>
