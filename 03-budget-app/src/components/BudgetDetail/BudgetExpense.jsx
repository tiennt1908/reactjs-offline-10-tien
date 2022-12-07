import React from 'react'
import BudgetItem from './BudgetItem'

export default function BudgetExpense({ listItem, total }) {

    return (
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            <div className="expenses__list">
                {
                    listItem.map((e) => {
                        return <BudgetItem key={e.id} id={e.id} value={e.amount} total={total}>{e.description}</BudgetItem>
                    })
                }
            </div>
        </div>
    )
}
