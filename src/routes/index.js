import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
// import createListView from "../views/CreateListView.js";
import Bus from "../utils/bus.js";
<<<<<<< HEAD
=======
import { store } from '../store/index.js';
>>>>>>> 08ab6db8f0a2af6acde4c5ce88ed242560c19f24

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", //url # 제거
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      //path: url주소
      //component : url 주소로 갔을때 컴포넌트
      path: "/news",
      name: "news",
      component: NewsView,
<<<<<<< HEAD
      beforeEnter: (to, from, next) =>{
        console.log('to', to);
        console.log('from', from);
        console.log('next', next);
        
        this.$store
        .dispatch("FETCH_LIST", this.$route.name)
        .then(() => {
            console.log(5);
          Bus.$emit("end:spinner");
        })
        .catch(error => {
          console.log(error);
        });
      }
=======
>>>>>>> 08ab6db8f0a2af6acde4c5ce88ed242560c19f24
      // component: createListView("NewsView") //하이오더 컴포넌트 적용
      beforeEnter: (to,from,next) => {
       
        Bus.$emit("start:spinner");
        setTimeout(() => {
          store
            .dispatch("FETCH_LIST", to.name)
            .then(() => {next()})
            .catch(error => {
              console.log(error);
            });
        }, 3000);
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      beforeEnter: (to,from,next) => {
        Bus.$emit("start:spinner");
        setTimeout(() => {
          store
            .dispatch("FETCH_LIST", to.name)
            .then(() => next())
            .catch(error => {
              console.log(error);
            });
        }, 3000);
      },
      // component: createListView("JobsView")
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      beforeEnter: (to,from,next) => {
        Bus.$emit("start:spinner");
        setTimeout(() => {
          store
            .dispatch("FETCH_LIST", to.name)
            .then(() => next())
            .catch(error => {
              console.log(error);
            });
        }, 3000);
      },
      // component: createListView("AskView")
    },
    {
      path: "/user/:id",
      component: UserView
    },
    {
      path: "/item/:id",
      component: ItemView
    }
  ]
});
