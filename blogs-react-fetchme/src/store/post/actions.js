import { mappingPostData } from "../../helpers";
import postService from "../../services/post";

// Action Type
export const ACT_FETCH_ARTICLE_LATEST   = 'ACT_FETCH_ARTICLE_LATEST'
export const ACT_FETCH_ARTICLE_POPULAR  = 'ACT_FETCH_ARTICLE_POPULAR'
export const ACT_FETCH_ARTICLE_GENERAL  = 'ACT_FETCH_ARTICLE_GENERAL'
export const ACT_FETCH_DETAIL  = 'ACT_FETCH_DETAIL'

// Action
export function actFetchArticleLatest(posts) {
  return {
    type: ACT_FETCH_ARTICLE_LATEST,
    payload: {
      posts
    }
  }
}
export function actFetchArticlePopular(posts) {
  return {
    type: ACT_FETCH_ARTICLE_POPULAR,
    payload: {
      posts
    }
  }
}
export function actFetchArticleGeneral({ posts, total, totalPages, currentPage }) {
  return {
    type: ACT_FETCH_ARTICLE_GENERAL,
    payload: {
      posts, total, totalPages, currentPage
    }
  }
}



// Action Async
export function actFetchDetailAsync({
  slug = ''
} = {}) {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleDetail(slug);
      const detail = response.data[0];
      dispatch(actFetchDetail(detail));
    } catch (err) {
      // TODO 
    }
  }
}

export function actFetchArticleLatestAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleLatest();
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchArticleLatest(posts));
    } catch (err) {
      // TODO
    }
  }
}
export function actFetchArticlePopularAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticlePopular()
      const posts = response.data.map(mappingPostData)

      dispatch(actFetchArticlePopular(posts))
    } catch (err) {
      // TODO 
    }
  }
}

export function actFetchArticleGeneralAsync({
  perPage = 2,
  currentPage = 1,
  search = ''
} = {}) {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleGeneral({ perPage, currentPage, search });
      const total = Number(response.headers['x-wp-total']);
      const totalPages = Number(response.headers['x-wp-totalpages']);
      const posts = response.data.map(mappingPostData);

      dispatch(actFetchArticleGeneral({ posts, total, totalPages, currentPage }))
    } catch (err) {
      // TODO 
    }
  }
}