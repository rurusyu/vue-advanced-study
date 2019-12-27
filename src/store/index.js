import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
      news:[],
      asks:[],
      jobs:[],
      user:{},
      item:[],
      list:[],
  },
  //getters는 컴포넌트의 computed임. 더 간결하게 쓰기위해서 스토어에 명시
  getters:{
    fetchedAsk(state){
        return state.asks;
    },
    fetchedItem(state){
        return state.item;
    }
  },
  //mutations:mutations, //같으니깐 mutations하나로 해도됨.
  mutations,
  actions,
})