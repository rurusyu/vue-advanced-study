<template>
  <div>
    <list-item></list-item>
  </div>
</template>
<script>
import ListItem from "../components/ListItem.vue";
import Bus from "../utils/bus.js";
export default {
  components: {
    ListItem
  },
  created() {
    Bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_JOB")
        .then(() => {
          Bus.$emit("end:spinner");
        })
        .catch(error => {
          console.log(error);
        });
    }, 3000);
  }
};
</script>
<style>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
