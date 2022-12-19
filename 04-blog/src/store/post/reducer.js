import {
  ACT_GET_LATEST_POSTS,
  ACT_GET_NEWS_POSTS,
  ACT_GET_POPULAR_POSTS,
  ACT_GET_SEARCH_POSTS,
} from "./actions";

const initialState = {
  latestPosts: [],
  popularPosts: [],
  newsPosts: [],
  searchPosts: [],
  totalPageNewsPosts: 0,
  totalPageSearchPosts: 0,
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
      return {
        ...state,
        newsPosts: [...state.newsPosts, ...action.payload.posts],
        totalPageNewsPosts: action.payload.totalPage,
      };
    case ACT_GET_SEARCH_POSTS:
      return {
        ...state,
        searchPosts:
          action.payload.currentPage === 1
            ? action.payload.posts
            : [...state.searchPosts, ...action.payload.posts],
        totalPageSearchPosts: action.payload.totalPage,
      };
    default:
      return state;
  }
}
export default reducer;
