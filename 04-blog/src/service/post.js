import Api from "./api";

const postService = {
  getAll(inputParams) {
    return Api.get("wp/v2/posts", {
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
  getGeneralPost(page) {
    return this.getAll({ per_page: 2, page: page });
  },
  getSearchPost(searchValue, page) {
    return this.getAll({ per_page: 2, search: searchValue, page: page });
  },
  getPostsByCategoryId(categoriesId, page) {
    return this.getAll({ per_page: 2, page, categories: categoriesId });
  },
};
export default postService;
