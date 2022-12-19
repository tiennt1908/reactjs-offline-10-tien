import axios from "axios";

export const ACT_GET_POST_DETAIL = "ACT_GET_POST_DETAIL";
export const ACT_GET_POST_RELATED = "ACT_GET_POST_RELATED";

export function actGetPostDetail(post) {
  return {
    type: ACT_GET_POST_DETAIL,
    payload: {
      post,
    },
  };
}
export function actGetPostRelated(posts) {
  return {
    type: ACT_GET_POST_RELATED,
    payload: {
      posts,
    },
  };
}
export function actAsyncGetPostDetail(slug) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://wp-api.test/wp-json/wp/v2/posts?slug=${slug}`
      );
      const postDetail = response.data;
      dispatch(actGetPostDetail(postDetail[0]));
      return { status: true, data: postDetail[0] };
    } catch (err) {
      console.log(err);
      return { status: false };
    }
  };
}
export function actAsyncGetPostRelated(author, exclude) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://wp-api.test/wp-json/wp/v2/posts?per_page=3&page=1&author=${author}&exclude=${exclude}&lang=vi`
      );
      const posts = response.data;
      dispatch(actGetPostRelated(posts));
      return { status: true };
    } catch (err) {
      console.log(err);
      return { status: false };
    }
  };
}
