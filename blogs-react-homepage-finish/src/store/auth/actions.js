import authService from "../../services/auth";

// Action Type
export const ACT_LOGIN = 'ACT_LOGIN';

// Action
// Action
export function actLogin(response) {
  return {
    type: ACT_LOGIN,
    payload: {
      response
    }
  }
}
// Action Async
export function actLoginAsync(params) {
  return async (dispatch) => {
    try {
      const response = await authService.login(params)
      return {
        ok: true
      }
      //dispatch(actLogin(response));
    } catch (err) {
      return {
        ok: true,
        error: "Thông tin đăng nhập không đúng"
      }
    }
  }
}