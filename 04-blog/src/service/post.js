import Api from "./api";

const postService = {
  getAll(inputParams) {
    return Api.call().get("wp/v2/posts", {
      params: {
        ...inputParams,
        lang: "vi",
      },
    });
  },
  getLated() {
    return this.getAll({ per_page: 3, page: 1 });
  },
  getPostPopular() {
    return this.getAll({ per_page: 3, page: 1, orderby: "post_views" });
  },
  getPagingPost(page, extraParam) {
    return this.getAll({ page: page, ...extraParam });
  },
  getSearchPost(page, searchValue) {
    return this.getAll({ per_page: 2, search: searchValue, page: page });
  },
  getPostsByCategoryId(categoriesId, page) {
    return this.getAll({ per_page: 2, page, categories: categoriesId });
  },
  getDetailPost(slug) {
    return this.getAll({ slug });
  },
  getRelatedPosts(author, exclude) {
    return this.getAll({per_page: 3, page: 1, author: author, exclude: exclude});
  },
};
export default postService;
