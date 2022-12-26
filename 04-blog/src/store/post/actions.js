import axios from "axios";
import { parseStructPostData } from "../../helpers";
import Api from "../../service/api";
import postService from "../../service/post";

export const ACT_GET_LATEST_POSTS = "ACT_GET_LATEST_POSTS";
export const ACT_GET_POPULAR_POSTS = "ACT_GET_POPULAR_POSTS";
export const ACT_GET_GENERAL_POSTS = "ACT_GET_GENERAL_POSTS";
export const ACT_GET_SEARCH_POSTS = "ACT_GET_SEARCH_POSTS";
export const ACT_GET_POSTS_BY_CATEGORY_ID = "ACT_GET_POSTS_BY_CATEGORY_ID";

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
export function actGetGeneralPosts(posts, currentPage, totalPage) {
  return {
    type: ACT_GET_GENERAL_POSTS,
    payload: {
      posts,
      currentPage,
      totalPage,
    },
  };
}
export function actSearchPosts(posts, currentPage, totalPage) {
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
export function actAsyncGetGeneralPosts(page) {
  return async (dispatch) => {
    try {
      const response = await postService.getGeneralPost(page);
      const posts = response.data.map((e) => parseStructPostData(e));
      const totalPage = parseInt(response.headers["x-wp-totalpages"]);
      dispatch(actGetGeneralPosts(posts, page, totalPage));
      return { status: true };
    } catch (e) {
      return { status: false };
    }
  };
}
export function actAsyncSearchPosts(value, page) {
  return async (dispatch) => {
    try {
      const response = await postService.getSearchPost(value, page);
      const posts = response.data.map((e) => parseStructPostData(e));
      const totalPage = parseInt(response.headers["x-wp-totalpages"]);
      dispatch(actSearchPosts(posts, page, totalPage));
      return { status: true };
    } catch (err) {
      console.log(err);
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
