import React from 'react'
import useBudget from '../../hooks/useBudget';

import BudgetExpense from './BudgetExpense';
import BudgetIncome from './BudgetIncome';

export default function BudgetDetail() {

    const { listIncome, listExpense, totalIncome } = useBudget();

    return (
        <div className="container clearfix">
            <BudgetIncome listItem={listIncome} income={totalIncome} />
            <BudgetExpense listItem={listExpense} income={totalIncome} />
        </div>
    )
}
