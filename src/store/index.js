import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList} from "../api/index.js";



Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
      news:[],
      asks:[],
      jobs:[],
  },
  //getters는 컴포넌트의 computed임. 더 간결하게 쓰기위해서 스토어에 명시
  getters:{
    fetchedAsk(state){
        return state.asks;
    }
  },
  mutations:{
    SET_NEWS(state, news){
        state.news = news;
    },
    SET_ASK(state, ask){
        state.asks = ask;
    },
    SET_JOB(state, jobs){
        state.jobs = jobs;
    },
  },
  actions: {
      FETCH_NEWS(context){
        fetchNewsList()
        .then(res => {
            console.log(res);
            context.commit('SET_NEWS', res.data);
        })
        .catch(error => {
            console.log(error);
        })
      },
      FETCH_ASK(context){
        fetchAskList()
        .then(res => {
            console.log(res);
            context.commit('SET_ASK', res.data);
        })
        .catch(error => {
            console.log(error);
        })
      },
      FETCH_JOB({commit}){
        fetchJobsList()
        .then(res => {
            console.log(res);
            commit('SET_JOB', res.data);
        })
        .catch(error => {
            console.log(error);
        })
      },
  }
})