import {
  ACT_GET_LATEST_POSTS,
  ACT_GET_POPULAR_POSTS,
  ACT_GET_SEARCH_POSTS,
  ACT_GET_POSTS_BY_CATEGORY_ID,
  ACT_GET_DETAIL_POST,
  ACT_GET_RELATED_POSTS,
  ACT_GET_PAGING_POSTS,
} from "./actions";

const initialState = {
  latestPosts: [],
  popularPosts: [],
  pagingPosts: {
    posts: [],
    currentPage: 1,
    totalPage: 0,
    totalPost: 0
  },
  categoryPosts: [],
  detailPost: {},
  relatedPosts: [],
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
    case ACT_GET_PAGING_POSTS:
    const newPagingPosts =
        action.payload.currentPage === 1
          ? action.payload.posts
          : [...state.pagingPosts.posts, ...action.payload.posts];
      return {
        ...state,
        pagingPosts: {
          posts: newPagingPosts,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalPost: action.payload.totalPost
        },
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
    case ACT_GET_DETAIL_POST:
      return {
        ...state,
        detailPost: action.payload.post,
      };
    case ACT_GET_RELATED_POSTS:
      return {
        ...state,
        relatedPosts: action.payload.posts,
      };
    default:
      return state;
  }
}
export default reducer;
