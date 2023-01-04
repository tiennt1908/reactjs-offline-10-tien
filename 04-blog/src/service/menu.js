import Api from "./api";

const menuService = {
  getAll(inputParams) {
    return Api.call().get("menus/v1/menus/main-menu-vi", {
      params: {
        ...inputParams,
      },
    });
  },
  getCategories() {
    return this.getAll();
  },
};
export default menuService;
