import { v4 as uuidv4 } from "uuid";
import { ACT_ADD_ITEM, ACT_DELETE_ITEM } from "./actions";

const initState = {
  listBudgetItem: JSON.parse(localStorage.getItem("budgetItems")) || [],
};
const reducer = (state = initState, action) => {
  const budgetItems = state.listBudgetItem;
  let newBudgetItems = [];
  switch (action.type) {
    case ACT_DELETE_ITEM:
      newBudgetItems = budgetItems.filter((e) => e.id !== action.payload);
      localStorage.setItem("budgetItems", JSON.stringify(newBudgetItems));
      return { ...state, listBudgetItem: newBudgetItems };

    case ACT_ADD_ITEM:
      newBudgetItems = [...budgetItems, { id: uuidv4(), ...action.payload }];
      localStorage.setItem("budgetItems", JSON.stringify(newBudgetItems));
      return { ...state, listBudgetItem: newBudgetItems };

    default:
      return state;
  }
};
export default reducer;
