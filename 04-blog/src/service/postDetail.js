import Api from "./api";

const postDetailService = {
  getAll(inputParams) {
    return Api.get("wp/v2/posts", {
      params: {
        ...inputParams,
      },
    });
  },
  getPostDetail(slug) {
    return this.getAll({ slug });
  },
  getPostRelated(author, exclude) {
    return this.getAll({
      per_page: 3,
      page: 1,
      author: author,
      exclude: exclude,
      lang: "vi",
    });
  },
};
export default postDetailService;
