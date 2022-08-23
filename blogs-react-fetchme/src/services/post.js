import { api } from './api';

const postService = {
  getList(params) {
    return api.call().get('/wp/v2/posts', {
      params: {
        ...params
      }
    });
  },
  getArticleLatest() {
    return postService.getList({
      per_page: 3,
      page: 1
    });
  },
  getArticleGeneral({
    perPage = 2,
    currentPage = 1,
    search = ''
  } = {}) {
    return postService.getList({
      page: currentPage,
      per_page: perPage,
      search
    })
  },
  getArticlePopular() {
    return postService.getList({
      page: 1,
      per_page: 3,
      orderby: 'post_views'
    })
  }
}

export default postService;