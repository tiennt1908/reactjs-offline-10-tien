import axios from "axios";

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
      const response = await axios.get(
        "http://wp-api.test/wp-json/wp/v2/categories?per_page=100&page=1"
      );
      const categories = response.data;
      dispatch(actGetCategories(categories));
    } catch (err) {
      console.log(err);
    }
  };
};
