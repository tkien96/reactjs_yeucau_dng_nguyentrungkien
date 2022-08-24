import { mappingMenuData } from "../../helpers";
import menuService from "../../services/menu";

// Action Type
export const ACT_GET_MENU   = 'ACT_GET_MENU'

// Action
export function actMenu(menu) {
  return {
    type: ACT_GET_MENU,
    payload: {
      menu
    }
  }
}

// Action Async
export function actMenuAsync() {
  return async (dispatch) => {
    try {
      const response = await menuService.getMenu();
      const menu = response.data.items.map(mappingMenuData);
      dispatch(actMenu(menu));
    } catch (err) {
      // TODO
    }
  }
}