<template>
  <div>
   <p>name: {{userInfo.id}}</p>
   <p>karma: {{userInfo.karma}}</p>
   <p>created: {{userInfo.created}}</p>
  </div>
</template>
<script>
export default {
    computed:{
        userInfo(){
            return this.$store.state.user
        }
    },
    
    created(){
        const userName = this.$route.params.id;
        console.log(userName);
        this.$store.dispatch('FETCH_USER',userName);  //payload는 하나만 가능, 여러개 보낼시 객체로 감싸서 보내면됨, 이럴떄 디스트럭쳐링이 좋음
    }
};
</script>
<style></style>
