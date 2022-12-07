import React from 'react'
import { useSelector } from 'react-redux'

import BudgetExpense from './BudgetExpense';
import BudgetIncome from './BudgetIncome';

export default function BudgetDetail() {

    const listBudgetItem = useSelector(state => state.listBudgetItem);
    const listIncome = listBudgetItem.filter(e => e.amount >= 0);
    const listExpense = listBudgetItem.filter(e => e.amount < 0);
    const total = listBudgetItem.reduce((total, e) => {
        return total + e.amount
    }, 0)

    return (
        <div className="container clearfix">
            <BudgetIncome listItem={listIncome} total={total} />
            <BudgetExpense listItem={listExpense} total={total} />
        </div>
    )
}
