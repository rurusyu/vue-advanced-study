<template>
  <div>
    <div v-for="job in jobs">{{ job.title }}</div>
  </div>
</template>
<script>
import { fetchJobsList } from "../api/index.js";

export default {
  data() {
    return {
      jobs: []
    };
  },
  created() {
    fetchJobsList()
      .then(res => {
        this.jobs = res.data;
        console.log(this.jobs);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style></style>
