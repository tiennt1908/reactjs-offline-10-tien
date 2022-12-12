import React from 'react'
import BudgetItem from './BudgetItem'

export default function BudgetExpense({ listItem, income }) {

    return (
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            <div className="expenses__list">
                {
                    listItem.map((e) => {
                        return <BudgetItem key={e.id} id={e.id} value={e.amount} income={income}>{e.description}</BudgetItem>
                    })
                }
            </div>
        </div>
    )
}
