import { parseStructComment } from "../../helpers";
import commentService from "../../service/comment";

export const ACT_GET_COMMENTS = "ACT_GET_COMMENTS";
export const ACT_GET_CHILD_COMMENTS = "ACT_GET_CHILD_COMMENTS";

export function actGetComments(comments, totalComment, totalPage, currentPage) {
  return {
    type: ACT_GET_COMMENTS,
    payload: {
      comments,
      totalComment,
      totalPage,
      currentPage,
    },
  };
}
export function actGetChildComments(
  comments,
  parentId,
  totalComment,
  totalPage,
  currentPage
) {
  return {
    type: ACT_GET_CHILD_COMMENTS,
    payload: {
      comments,
      parentId,
      totalComment,
      totalPage,
      currentPage,
    },
  };
}
export function actAsyncGetComments(postId, page) {
  return async (dispatch) => {
    try {
      const response = await commentService.getComments(postId, page);
      const comments = response.data.map(parseStructComment);
      dispatch(
        actGetComments(
          comments,
          response.headers["x-wp-total"]*1,
          response.headers["x-wp-totalpages"]*1,
          page
        )
      );
      return { status: true };
    } catch (err) {
      return { status: false };
    }
  };
}
export function actAsyncGetChildComments(postId, commentId, page) {
  return async (dispatch) => {
    try {
      const response = await commentService.getComments(
        postId,
        page,
        commentId
      );
      const comments = response.data.map(parseStructComment);
      dispatch(
        actGetChildComments(
          comments,
          commentId,
          response.headers["x-wp-total"]*1,
          response.headers["x-wp-totalpages"]*1,
          page
        )
      );
      return { status: true };
    } catch (err) {
      return { status: false };
    }
  };
}
