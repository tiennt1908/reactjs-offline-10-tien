export const ACT_ADD_ITEM = "ACT_ADD_ITEM";
export const ACT_DELETE_ITEM = "ACT_DELETE_ITEM";

export function actAddItem(data) {
  return {
    type: "ACT_ADD_ITEM",
    payload: data,
  };
}
export function actDeleteItem(id) {
  return {
    type: "ACT_DELETE_ITEM",
    payload: id,
  };
}
