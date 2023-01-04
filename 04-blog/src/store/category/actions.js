import categoryService from "../../service/category";

export const ACT_GET_CATEGORIES = "ACT_GET_CATEGORIES";
export const actGetCategories = (categories) => {
  return {
    type: ACT_GET_CATEGORIES,
    payload: {
      categories,
    },
  };
};
export const actAsyncGetCategories = () => {
  return async (dispatch) => {
    try {
      const response = await categoryService.getCategories();
      const categories = response.data;
      const optimizedCategories = {};
      let i = 0;
      const count = categories.length;
      for (i = 0; i < count; i++) {
        const category = categories[i];
        optimizedCategories[category.id] = category;
      }
      dispatch(actGetCategories(optimizedCategories));
    } catch (err) {
      console.log(err);
    }
  };
};
