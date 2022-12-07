import React from 'react'
import { formatMoney } from '../../common';
export default function BudgetBar({ children, value, percent }) {

    let parentClass = children === "Income" ? "budget__income" : "budget__expenses";
    let titleClass = children === "Income" ? "budget__income--text" : "budget__expenses--text";
    let budgetClass = children === "Income" ? "budget__income--value" : "budget__expenses--value";

    return (
        <div className={"clearfix " + parentClass}>
            <div className={titleClass}>{children}</div>
            <div className="right">
                <div className={budgetClass}>{formatMoney(value)}</div>
                {!isNaN(percent) && <div className="budget__expenses--percentage">{Math.abs(percent)} %</div>}
            </div>
        </div>
    )
}