import { 
    fetchNewsList, 
    fetchAskList, 
    fetchJobsList, 
    fetchUserInfo, 
    fetchCommentItem,
    fetchList
} from "../api/index.js";

export default {
<<<<<<< HEAD
    FETCH_NEWS(context){
       return fetchNewsList()
        .then(res => {
            console.log(res);
            context.commit('SET_NEWS', res.data);
            return res; //spinner off해야함.
        })
        .catch(error => {
            console.log(error);
        })
=======
      //# async await
      async FETCH_NEWS(context){
        const response = await fetchNewsList();
        context.commit('SET_NEWS',response.data);
        return response;
>>>>>>> 08ab6db8f0a2af6acde4c5ce88ed242560c19f24
      },


      FETCH_ASK(context){
<<<<<<< HEAD
       return fetchAskList()
=======
        return fetchAskList()
>>>>>>> 08ab6db8f0a2af6acde4c5ce88ed242560c19f24
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
<<<<<<< HEAD
        .then(({data}) => {
            console.log(4);
            commit('SET_LIST',data)
        })
=======
        .then(({data}) => commit('SET_LIST',data))
>>>>>>> 08ab6db8f0a2af6acde4c5ce88ed242560c19f24
        .catch(error => console.log(error));
            
        }
}