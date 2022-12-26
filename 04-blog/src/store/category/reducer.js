import { ACT_GET_CATEGORIES } from "./actions";

const initialState = {
  categories: [],
  categoryPosts: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_GET_CATEGORIES:
      return { ...state, categories: action.payload.categories };
    default:
      return state;
  }
}
export default reducer;
