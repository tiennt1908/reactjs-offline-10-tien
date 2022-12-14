export const ACT_GET_CATEGORIES = "ACT_GET_CATEGORIES";
export const actGetCategories = (categories) => {
  return {
    type: ACT_GET_CATEGORIES,
    payload: {
      categories,
    },
  };
};
