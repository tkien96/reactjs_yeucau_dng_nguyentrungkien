import { ACT_LOGIN } from "./actions";

const intState = {
  currentUser: null
}

function reducer(authState = intState, action) {
  switch (action.type) {
    case ACT_LOGIN:
      return {
        ...authState,
        currentUser: action.payload.response
      }
    default:
      return authState;
  }
}

export default reducer;