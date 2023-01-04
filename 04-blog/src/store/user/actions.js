import { ACCESS_TOKEN, ERROR_MESSAGE } from "../../constants";
import { parseStructUserData } from "../../helpers";
import userService from "../../service/user";

export const ACT_LOGIN = "ACT_LOGIN";
export const ACT_LOGOUT = "ACT_LOGOUT";
export const ACT_REGISTER = "ACT_REGISTER";
export const ACT_GET_ME = "ACT_GET_ME";

export const actLogin = (token) => {
  return {
    type: ACT_LOGIN,
    payload: {
      token,
    },
  };
};
export const actLogout = () => {
  return{
    type: ACT_LOGOUT,
    payload:{

    }
  }
}
export const actRegister = (data) => {
  return {
    type: ACT_REGISTER,
    payload: {
      data,
    },
  };
};
export const actGetMe = (data) => {
  return {
    type: ACT_GET_ME,
    payload: {
      currentUser: data,
    },
  };
};
export const actAsyncLogin = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await userService.login(username, password);
      const token = response.data.token;
      dispatch(actLogin(token));
      dispatch(actAsyncGetMe(token));
      return {
        status: true,
        message: "",
      };
    } catch (err) {
      return {
        status: false,
        message: err.response?.data?.message,
      };
    }
  };
};
export const actAsyncRegister = (email, username, password, nickname) => {
  return async (dispatch) => {
    try {
      const response = await userService.register(
        email,
        username,
        password,
        nickname
      );
      dispatch(actAsyncLogin(username,password));
      return {
        status: true,
        message: "",
      };
    } catch (err) {
      const errorCode = err.response.data.code;
      const errorMessage = ERROR_MESSAGE[errorCode];
      return {
        status: false,
        message: errorMessage,
      };
    }
  };
};
export const actAsyncGetMe = (token) => {
  if (!token) {
    token = localStorage.getItem(ACCESS_TOKEN);
  }
  return async (dispatch) => {
    const response = token ? await userService.getMe(token) : { data: null };
    const data = parseStructUserData(response.data);
    dispatch(actGetMe(data));
  };
};
