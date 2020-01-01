import Bus from "../utils/bus.js";

export default {
    //재사용할 컴포넌트 & 옵션
<<<<<<< HEAD
    created() {
    Bus.$emit("start:spinner");
    // setTimeout(() => {
      this.$store
        .dispatch("FETCH_LIST", this.$route.name)
        .then(() => {
            console.log(5);
          Bus.$emit("end:spinner");
        })
        .catch(error => {
          console.log(error);
        });
    // }, 3000);
=======
  mounted() {
    Bus.$emit("end:spinner");
>>>>>>> 08ab6db8f0a2af6acde4c5ce88ed242560c19f24
  },
  // created() {
  //   Bus.$emit("start:spinner");
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch("FETCH_LIST", this.$route.name)
  //       .then(() => {
  //         Bus.$emit("end:spinner");
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, 3000);
  // },
}

