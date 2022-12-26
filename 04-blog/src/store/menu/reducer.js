import { ACT_GET_MENU } from "./actions";

const initialState = {
  menus: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_GET_MENU:
      return { ...state, menus: action.payload.menus };
    default:
      return state;
  }
}

export default reducer;
