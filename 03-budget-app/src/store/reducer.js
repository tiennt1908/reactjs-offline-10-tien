import { v4 as uuidv4 } from "uuid";
import { ACT_ADD_ITEM, ACT_DELETE_ITEM } from "./actions";

const initState = {
  listBudgetItem: [
    {
      id: uuidv4(),
      description: "Thu nhap 1",
      amount: 200000,
    },
    {
      id: uuidv4(),
      description: "Thu nhap 2",
      amount: 500000,
    },
    {
      id: uuidv4(),
      description: "Chi tieu 1",
      amount: -100000,
    },
    {
      id: uuidv4(),
      description: "Chi tieu 2",
      amount: -10000,
    },
  ],
};
const reducer = (state = initState, action) => {
  const budgetItems = state.listBudgetItem;
  let newBudgetItems = [];
  switch (action.type) {
    case ACT_DELETE_ITEM:
      newBudgetItems = budgetItems.filter((e) => e.id !== action.payload);
      return { ...state, listBudgetItem: newBudgetItems };

    case ACT_ADD_ITEM:
      newBudgetItems = [...budgetItems, { id: uuidv4(), ...action.payload }];
      return { ...state, listBudgetItem: newBudgetItems };

    default:
      return state;
  }
};
export default reducer;
