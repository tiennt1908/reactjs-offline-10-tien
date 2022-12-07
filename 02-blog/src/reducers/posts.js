import * as types from "../constants/ActionType";
let defaultState = [{ name: "POST 1", name: "POST 2" }];
const posts = (state = defaultState, action) => {
  switch (action.type) {
    case types.LIST_POST:
      return state;
    default:
      return state;
  }
};
export default posts;
