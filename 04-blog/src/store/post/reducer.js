import {
  ACT_GET_LATEST_POSTS,
  ACT_GET_GENERAL_POSTS,
  ACT_GET_POPULAR_POSTS,
  ACT_GET_SEARCH_POSTS,
  ACT_GET_POSTS_BY_CATEGORY_ID,
} from "./actions";

const initialState = {
  latestPosts: [],
  popularPosts: [],
  generalPosts: [],
  searchPosts: [],
  categoryPosts: [],
  totalPage: 0,
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
    case ACT_GET_GENERAL_POSTS:
      const newGeneralPosts =
        action.payload.currentPage === 1
          ? action.payload.posts
          : [...state.generalPosts, ...action.payload.posts];
      return {
        ...state,
        generalPosts: newGeneralPosts,
        totalPage: action.payload.totalPage,
      };
    case ACT_GET_SEARCH_POSTS:
      const newSearchPosts =
        action.payload.currentPage === 1
          ? action.payload.posts
          : [...state.searchPosts, ...action.payload.posts];
      return {
        ...state,
        searchPosts: newSearchPosts,
        totalPage: action.payload.totalPage,
      };
    case ACT_GET_POSTS_BY_CATEGORY_ID:
      const categoryPosts =
        action.payload.currentPage === 1
          ? action.payload.posts
          : [...state.categoryPosts, ...action.payload.posts];
      return {
        ...state,
        categoryPosts: categoryPosts,
        totalPage: action.payload.totalPage,
      };
    default:
      return state;
  }
}
export default reducer;
