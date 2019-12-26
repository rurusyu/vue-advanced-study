import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

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
      component: NewsView
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView
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
