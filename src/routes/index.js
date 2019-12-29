import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
// import createListView from "../views/CreateListView.js";
import Bus from "../utils/bus.js";
import { store } from '../store/index.js';

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
