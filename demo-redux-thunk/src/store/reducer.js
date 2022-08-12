import { ACT_GET_LIST_POST } from './actions';

const initState = { 
  listPosts : []
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_GET_LIST_POST:
      return{
        ...state,  listPosts: action.payload
      }
    default:
      return state
  }
}

export default reducer