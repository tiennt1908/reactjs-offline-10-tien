import {
  ACT_GET_LATEST_POSTS,
  ACT_GET_NEWS_POSTS,
  ACT_GET_POPULAR_POSTS,
} from "./actions";

const initialState = {
  latestPosts: [],
  popularPosts: [],
  newsPosts: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_GET_LATEST_POSTS:
      return {
        ...state,
        latestPosts: action.payload.posts,
      };
    case ACT_GET_POPULAR_POSTS:
      return {
        ...state,
        popularPosts: action.payload.posts,
      };
    case ACT_GET_NEWS_POSTS:
      const posts = [...state.newsPosts];
      posts.push(...action.payload.posts);
      return {
        ...state,
        newsPosts: posts,
      };
    default:
      return state;
  }
}
export default reducer;
