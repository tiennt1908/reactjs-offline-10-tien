import { useSelector } from "react-redux";
import { sumArrayObject } from "../common/index";
export default function useBudget() {
  const listBudgetItem = useSelector((state) => state.listBudgetItem);
  const listIncome = listBudgetItem.filter((e) => e.amount >= 0);
  const listExpense = listBudgetItem.filter((e) => e.amount < 0);

  const totalIncome = sumArrayObject(listIncome, "amount");
  const totalExpense = sumArrayObject(listExpense, "amount");
  const total = totalExpense + totalIncome;

  return {
    listBudgetItem,
    listIncome,
    listExpense,
    totalIncome,
    totalExpense,
    total,
  };
}
