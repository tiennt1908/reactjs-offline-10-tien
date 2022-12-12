import React from 'react'

import BudgetItem from './BudgetItem'

export default function BudgetIncome({ listItem }) {

    return (
        <div className="income">
            <h2 className="icome__title">Income</h2>
            <div className="income__list">
                {
                    listItem.map((e) => {
                        return <BudgetItem key={e.id} id={e.id} value={e.amount}>{e.description}</BudgetItem>
                    })
                }
            </div>
        </div>
    )
}
