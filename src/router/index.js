import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path:'/',
            redirect: '/news',
        },
        {
            //path: url주소
            //component : url 주소로 갔을때 컴포넌트
            path:'/news',
            component: NewsView,
        },
        {
            path:'/jobs',
            component: JobsView,
        },
        {
            path:'/ask',
            component: AskView,
        },
    ]
})

