import { 
    fetchNewsList, 
    fetchAskList, 
    fetchJobsList, 
    fetchUserInfo, 
    fetchCommentItem
} from "../api/index.js";

export default {
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
      FETCH_USER({commit}, name){
        fetchUserInfo(name)
        .then( ({data}) => {
           
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
      },
      FETCH_ITEM({commit}, id){
        fetchCommentItem(id)
        .then( ({data}) => {
           
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error);
        })
      },
}