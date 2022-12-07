import React from 'react'
import { useSelector } from 'react-redux'
import { formatMoney } from '../../common';
import BudgetBar from './BudgetBar'

export default function Statistic() {

    const listBudgetItem = useSelector(state => state.listBudgetItem);

    let income = 0;
    let expenses = 0;
    for (let i = 0; i < listBudgetItem.length; i++) {
        const val = listBudgetItem[i].amount;
        income += val >= 0 && val;
        expenses += val < 0 && val;
    }
    const total = income + expenses;
    const incomePercent = Math.round((income * 100) / total);
    const expensesPercent = Math.round((Math.abs(expenses) * 100) / total);

    return (
        <div className="budget">
            <div className="budget__title">
                Available Budget in <span className="budget__title--month">%Month%</span>:
            </div>

            <div className="budget__value">{formatMoney(total)}</div>

            <BudgetBar value={income}>Income</BudgetBar>
            <BudgetBar value={expenses} percent={expensesPercent}>Expenses</BudgetBar>
        </div>
    )
}
