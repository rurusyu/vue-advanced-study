<template>
  <div class="user-container">
    <div>User</div>
    <div class="user-description">
      <div>{{info.id}}</div>
      <div class="time">{{info.created}}</div>
    </div>
  </div>
</template>

<script>
//1.자식컴포넌트에서 데이터 접근
//2. 상위 컴포넌트에서 props로 전달 받음/
export default {
  props: {
    info: Object //Object는 Props validation
  }
  //1.번 방법
  //   computed: {
  //     userInfo() {
  //       return this.$store.state.user;
  //     }
  //   }
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