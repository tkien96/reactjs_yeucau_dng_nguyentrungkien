import { ACT_GET_MENU } from "./actions";

const intState = {
  menu: []
}

function reducer(menuState = intState, action) {
  switch (action.type) {
    case ACT_GET_MENU:
      return {
        ...menuState,
        menu: action.payload.menu
      }
    default:
      return menuState;
  }
}

export default reducer;