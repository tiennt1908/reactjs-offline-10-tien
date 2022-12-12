import React from 'react'
import { formatMoney, formatPercent } from '../../common/index';
import useBudget from '../../hooks/useBudget';
import BudgetBar from './BudgetBar'

export default function Statistic() {

    const { totalIncome, totalExpense, total } = useBudget();
    const expensesPercent = formatPercent(totalExpense, totalIncome);

    return (
        <div className="budget">
            <div className="budget__title">
                Available Budget in <span className="budget__title--month">%Month%</span>:
            </div>

            <div className="budget__value">{formatMoney(total)}</div>

            <BudgetBar value={totalIncome}>Income</BudgetBar>
            <BudgetBar value={totalExpense} percent={expensesPercent}>Expenses</BudgetBar>
        </div>
    )
}
