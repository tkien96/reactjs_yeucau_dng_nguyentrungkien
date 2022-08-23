import { authService } from "../../services/auth";
import { MESSAGE_FORM_ERROR } from '../../constants'
// Action Type
export const ACT_LOGIN_SUCCESS = 'ACT_LOGIN_SUCCESS';
export const ACT_LOGOUT = 'ACT_LOGOUT';
export const ACT_REGISTER = 'ACT_REGISTER';


// Action
export function actLoginSuccess({ user, token }) {
  return {
    type: ACT_LOGIN_SUCCESS,
    payload: {
      user,
      token
    }
  }
}


// Action Async
export function actFetchMeAsync(token) {
  return async dispatch => {
    try {
      const response = await authService.fetchMe(token);
      const user = response.data;
      dispatch(actLoginSuccess({ user, token }))
      return {
        ok: true
      }
    } catch (error) {
      return {
        ok: false,
        error: error
      }
    }
  }
}


export function actLoginAsync(username, password) {
  return async (dispatch) => {
    try {
      const response = await authService.login(username, password);
      const token = response.data.token;
      const responseMe = await dispatch(actFetchMeAsync(token));
      return {
        ok: responseMe.ok,
        error: responseMe.error
      }
    } catch (error) {
      return {
        ok: false,
        error: 'Username hoặc Password không hợp lệ!'
      }
    }
  }
}

export function actLogout() {
  return {
    type: ACT_LOGOUT
  }
}

export function actRegisterAsync({nickname, email, username, password}) {
  return async (dispatch) => {
    try {
      const response = await authService.register({nickname, email, username, password});
      dispatch(actLoginAsync(username, password))
      return {
        ok: true
      }
    } catch (error) {
      const code = error.response.data.code
      const mess = MESSAGE_FORM_ERROR[code] ? MESSAGE_FORM_ERROR[code] : MESSAGE_FORM_ERROR.default
      return {
        ok: false,
        error: mess
      }
    }
  }
}