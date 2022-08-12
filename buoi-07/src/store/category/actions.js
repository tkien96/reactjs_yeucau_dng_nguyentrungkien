import { mappingCategoryData } from "../../helpers";
import categoryService from "../../services/category";

// Action Type
export const ACT_FETCH_CATEGORIES = 'ACT_FETCH_CATEGORIES';

// Action
export function actFetchCategories(caterogires) {
  return {
    type: ACT_FETCH_CATEGORIES,
    payload: {
      caterogires
    }
  }
}
// Action Async
export function actFetchCategoriesAsync() {
  return async (dispatch) => {
    try {
      const response = await categoryService.getCategories();
      const caterogires = response.data.map(mappingCategoryData);
      dispatch(actFetchCategories(caterogires));
    } catch (err) {
      // TODO
    }
  }
}