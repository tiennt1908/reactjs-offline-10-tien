import axios from "axios";

export const ACT_GET_LATEST_POSTS = "ACT_GET_LATEST_POSTS";
export const ACT_GET_POPULAR_POSTS = "ACT_GET_POPULAR_POSTS";
export const ACT_GET_NEWS_POSTS = "ACT_GET_NEWS_POSTS";
export const ACT_GET_SEARCH_POSTS = "ACT_GET_SEARCH_POSTS";

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
export function actGetNewsPosts(posts, totalPage) {
  return {
    type: ACT_GET_NEWS_POSTS,
    payload: {
      posts,
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
export function actAsyncGetLatestPosts() {
  return async (dispatch) => {
    const response = await axios.get(
      "http://wp-api.test/wp-json/wp/v2/posts?per_page=3&page=1&lang=vi"
    );
    const posts = response.data;
    dispatch(actGetLatestPosts(posts));
  };
}
export function actAsyncGetPopularPosts() {
  return async (dispatch) => {
    const response = await axios.get(
      "http://wp-api.test/wp-json/wp/v2/posts?per_page=3&page=1&orderby=post_views&lang=vi"
    );
    const posts = response.data;
    dispatch(actGetPopularPosts(posts));
  };
}
export function actAsyncGetNewsPosts(page) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://wp-api.test/wp-json/wp/v2/posts?per_page=2&page=${page}&lang=vi`
      );
      const posts = response.data;
      const totalPage = parseInt(response.headers["x-wp-totalpages"]);
      dispatch(actGetNewsPosts(posts, totalPage));
      return { status: true };
    } catch (e) {
      return { status: false };
    }
  };
}
export function actAsyncSearchPosts(value, page) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://wp-api.test/wp-json/wp/v2/posts?per_page=2&page=${page}&search=${value}&lang=vi`
      );
      const posts = response.data;
      const totalPage = parseInt(response.headers["x-wp-totalpages"]);
      dispatch(actSearchPosts(posts, page, totalPage));
      return { status: true };
    } catch (err) {
      console.log(err);
      return { status: false };
    }
  };
}
