import { parseStructListMenu, parseStructMenu } from "../../helpers";
import menuService from "../../service/menu";

export const ACT_GET_MENU = "ACT_GET_MENU";

export const actGetMenus = (menus) => {
  return {
    type: ACT_GET_MENU,
    payload: {
      menus,
    },
  };
};
export const actAsyncGetMenus = () => {
  return async (dispatch) => {
    const response = await menuService.getCategories();
    const menuList = response.data.items;
    dispatch(actGetMenus(parseStructListMenu(menuList)));
  };
};
