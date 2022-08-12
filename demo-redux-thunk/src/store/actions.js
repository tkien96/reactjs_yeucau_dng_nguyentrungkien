import axios from 'axios'

// Action Types
export const ACT_GET_LIST_POST = 'ACT_GET_LIST_POST'

export function actGetListPosts(posts) {
  return {
    type: ACT_GET_LIST_POST,
    payload: posts
  }
}

export function actGetListPostsAsync() {
  return dispatch => {
    axios.get('https://api-meme-zendvn-01.herokuapp.com/api/v2/post/getListPagination.php?pageSize=3&currPage=1')
    .then(function (response) {
      if(response.status === 200){
        dispatch(actGetListPosts(response.data.posts))
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
  }
}