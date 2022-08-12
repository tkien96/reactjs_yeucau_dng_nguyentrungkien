import { ACT_FETCH_CATEGORIES } from "./actions";

const intState = {
  categories: [],
}

function reducer(state = intState, action) {
  switch (action.type) {
    case ACT_FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload.caterogires
      }
    default:
      return state;
  }
}

export default reducer;