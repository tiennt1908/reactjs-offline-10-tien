import { parseStructPostData } from "../../helpers";
import postService from "../../service/post";

export const ACT_GET_LATEST_POSTS = "ACT_GET_LATEST_POSTS";
export const ACT_GET_POPULAR_POSTS = "ACT_GET_POPULAR_POSTS";
export const ACT_GET_PAGING_POSTS = "ACT_GET_PAGING_POSTS";
export const ACT_GET_SEARCH_POSTS = "ACT_GET_SEARCH_POSTS";
export const ACT_GET_POSTS_BY_CATEGORY_ID = "ACT_GET_POSTS_BY_CATEGORY_ID";

export const ACT_GET_DETAIL_POST = "ACT_GET_DETAIL_POST";
export const ACT_GET_RELATED_POSTS = "ACT_GET_RELATED_POSTS";

export function actGetLatestPosts(posts) {
  return {
    type: ACT_GET_LATEST_POSTS,
    payload: {
      posts,
    },
  };
}
export function actGetPopularPosts(posts) {
  return {
    type: ACT_GET_POPULAR_POSTS,
    payload: {
      posts,
    },
  };
}
export function actGetPagingPosts(posts, currentPage, totalPage, totalPost) {
  return {
    type: ACT_GET_PAGING_POSTS,
    payload: {
      posts,
      currentPage,
      totalPage,
      totalPost
    },
  };
}
export function actSearchPosts(currentPage, posts, totalPage) {
  return {
    type: ACT_GET_SEARCH_POSTS,
    payload: {
      posts,
      currentPage,
      totalPage,
    },
  };
}
export const actGetPostsByCategoryId = (posts, currentPage, totalPage) => {
  return {
    type: ACT_GET_POSTS_BY_CATEGORY_ID,
    payload: {
      posts,
      currentPage,
      totalPage,
    },
  };
};
export function actGetDetailPost(post) {
  return {
    type: ACT_GET_DETAIL_POST,
    payload: {
      post,
    },
  };
}
export function actGetRelatedPosts(posts) {
  return {
    type: ACT_GET_RELATED_POSTS,
    payload: {
      posts,
    },
  };
}
export function actAsyncGetLatestPosts() {
  return async (dispatch) => {
    const response = await postService.getLated();
    const posts = response.data.map((e) => parseStructPostData(e));
    dispatch(actGetLatestPosts(posts));
  };
}
export function actAsyncGetPopularPosts() {
  return async (dispatch) => {
    const response = await postService.getPostPopular();
    const posts = response.data.map((e) => parseStructPostData(e));
    dispatch(actGetPopularPosts(posts));
  };
}
export function actAsyncGetPagingPosts(page, extraParam = {}) {
  return async (dispatch) => {
    try {
      const response = await postService.getPagingPost(page, extraParam);
      const posts = response.data.map((e) => parseStructPostData(e));
      const totalPage = parseInt(response.headers["x-wp-totalpages"]);
      const totalPost = parseInt(response.headers["x-wp-total"]);
      dispatch(actGetPagingPosts(posts, page, totalPage, totalPost));
      return { status: true };
    } catch (e) {
      return { status: false };
    }
  };
}

export function actAsyncGetPostsByCategoryId(categoryId, page) {
  return async (dispatch) => {
    try {
      const response = await postService.getPostsByCategoryId(categoryId, page);
      const posts = response.data.map((e) => parseStructPostData(e));
      const totalPage = parseInt(response.headers["x-wp-totalpages"]);
      dispatch(actGetPostsByCategoryId(posts, page, totalPage));
      return { status: true };
    } catch (err) {
      console.log(err);
      return { status: false };
    }
  };
}

export function actAsyncGetDetailPost(slug) {
  return async (dispatch) => {
    try {
      const response = await postService.getDetailPost(slug);
      const postDetail = response.data;
      dispatch(actGetDetailPost(postDetail[0]));
      return { status: true, data: postDetail[0] };
    } catch (err) {
      console.log(err);
      return { status: false };
    }
  };
}
export function actAsyncGetRelatedPosts(author, exclude) {
  return async (dispatch) => {
    try {
      const response = await postService.getRelatedPosts(author, exclude);
      const posts = response.data;
      dispatch(actGetRelatedPosts(posts));
      return { status: true };
    } catch (err) {
      console.log(err);
      return { status: false };
    }
  };
}
