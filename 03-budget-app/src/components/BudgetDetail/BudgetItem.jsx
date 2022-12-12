import React from 'react'
import { useDispatch } from 'react-redux';

import { formatMoney, formatPercent } from '../../common'
import { actDeleteItem } from '../../store/actions';

export default function BudgetItem({ children, id, value, income }) {

    const dispatch = useDispatch();

    const removeBudget = () => {
        dispatch(actDeleteItem(id));
    }

    return (
        <div className="item clearfix">
            <div className="item__description">{children}</div>
            <div className="right clearfix">
                <div className="item__value">{formatMoney(value)}</div>
                {!isNaN(income) && <div className="item__percentage">{formatPercent(value, income)}</div>}
                <div className="item__delete">
                    <button className="item__delete--btn" onClick={() => { removeBudget() }}><i className="ion-ios-close-outline" /></button>
                </div>
            </div>
        </div>
    )
}
