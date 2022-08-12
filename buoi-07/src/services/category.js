import { api } from './api';

const postCategory = {
  getList(params) {
    return api.call().get('/wp/v2/categories', {
      params: {
        ...params,
        lang: 'vi'
      }
    });
  },
  getCategories() {
    return postCategory.getList({
      per_page: 100,
      page: 1
    });
  }
}

export default postCategory;