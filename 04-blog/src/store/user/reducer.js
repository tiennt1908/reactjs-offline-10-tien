import { ACCESS_TOKEN } from "../../constants";
import { ACT_GET_ME, ACT_LOGIN, ACT_LOGOUT } from "./actions";

const initialState = {
  token: "",
  currentUser: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_LOGIN:
      localStorage.setItem(ACCESS_TOKEN, action.payload.token);
      return {
        ...state,
        token: action.payload.token,
      };
    case ACT_LOGOUT:
      localStorage.removeItem(ACCESS_TOKEN);
      return{
        ...state,
        token:"",
        currentUser:{},
      }
    case ACT_GET_ME:
      return {
        ...state,
        currentUser: action.payload.currentUser,
      };
    default:
      return state;
  }
};
export default reducer;
