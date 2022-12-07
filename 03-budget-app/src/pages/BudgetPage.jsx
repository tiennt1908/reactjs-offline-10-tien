import React from 'react'
import BudgetDetail from '../components/BudgetDetail'
import Form from '../components/Form'
import Statistic from '../components/Statistic'

export default function BudgetPage() {
    return (
        <>
            <div className="top">
                <Statistic />
            </div>
            <div className="bottom">
                <Form />
                <BudgetDetail />
            </div>
        </>
    )
}
