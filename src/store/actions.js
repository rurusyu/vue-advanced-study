import { 
    fetchNewsList, 
    fetchAskList, 
    fetchJobsList, 
    fetchUserInfo, 
    fetchCommentItem,
    fetchList
} from "../api/index.js";

export default {
      //# async await
      async FETCH_NEWS(context){
        const response = await fetchNewsList();
        context.commit('SET_NEWS',response.data);
        return response;
      },


      FETCH_ASK(context){
        return fetchAskList()
        .then(res => {
            console.log(res);
            context.commit('SET_ASK', res.data);
        })
        .catch(error => {
            console.log(error);
        })
      },
      FETCH_JOB({commit}){
        return fetchJobsList()
        .then(res => {
            console.log(res);
            commit('SET_JOB', res.data);
        })
        .catch(error => {
            console.log(error);
        })
      },
      FETCH_USER({commit}, name){
        return fetchUserInfo(name)
        .then( ({data}) => {
           
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
      },
      FETCH_ITEM({commit}, id){
        return fetchCommentItem(id)
        .then( ({data}) => {
           
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error);
        })
      },
      FETCH_LIST({commit}, pageName){
        return fetchList(pageName)
        .then(({data}) => commit('SET_LIST',data))
        .catch(error => console.log(error));
            
        }
}