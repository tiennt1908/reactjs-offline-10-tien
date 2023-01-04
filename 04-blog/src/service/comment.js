import Api from "./api";

const commentService = {
  getAll(inputParams) {
    return Api.call().get("wp/v2/comments", {
      params: {
        ...inputParams,
      },
    });
  },
  getComments(postId, page, commentId) {
    return this.getAll(
      {
        per_page: 2,
        page,
        post: postId,
        parent: commentId || 0,
        order: "asc",
      }
    );
  },
};
export default commentService;
