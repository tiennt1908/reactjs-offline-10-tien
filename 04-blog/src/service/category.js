import Api from "./api";

const categoryService = {
  getAll(inputParams) {
    return Api.get("wp/v2/categories", {
      params: {
        ...inputParams,
      },
    });
  },
  getCategories() {
    return this.getAll({ per_page: 100, page: 1 });
  },
};
export default categoryService;
