import { ACT_FETCH_ARTICLE_LATEST, ACT_FETCH_ARTICLE_POPULAR, ACT_FETCH_ARTICLE_GENERAL } from "./actions";

const intState = {
  articleLatest : [],
  articlePopular: [],
  articleGeneral: [],
  totalGeneral  : 0
}

function reducer(postState = intState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLE_LATEST:
      return {
        ...postState,
        articleLatest: action.payload.posts
      }
    case ACT_FETCH_ARTICLE_POPULAR:
      return {
        ...postState,
        articlePopular: action.payload.posts
      }
    case ACT_FETCH_ARTICLE_GENERAL:
      return {
        ...postState,
        articleGeneral: action.payload.data ? [ ...postState.articleGeneral, ...action.payload.data ] : [ ...postState.articleGeneral ],
        totalGeneral: parseInt(action.payload.total)
      }
    default:
      return postState;
  }
}

export default reducer;