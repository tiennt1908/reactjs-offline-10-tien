import { ACT_GET_POST_DETAIL, ACT_GET_POST_RELATED } from "./actions";

const initialState = {
  postDetail: {},
  postsRelated: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_GET_POST_DETAIL:
      return {
        ...state,
        postDetail: action.payload.post,
      };
    case ACT_GET_POST_RELATED:
      return {
        ...state,
        postsRelated: action.payload.posts,
      };
    default:
      return state;
  }
}
export default reducer;
