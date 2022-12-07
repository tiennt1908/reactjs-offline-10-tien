import React from 'react'
import { useDispatch } from 'react-redux';

import { formatMoney } from '../../common'
import { actDeleteItem } from '../../store/actions';

export default function BudgetItem({ children, id, value, total }) {
    const dispatch = useDispatch();

    const percent = Math.round((Math.abs(value) * 100) / total);

    const removeBudget = () => {
        dispatch(actDeleteItem(id));
    }
    return (
        <div className="item clearfix">
            <div className="item__description">{children}</div>
            <div className="right clearfix">
                <div className="item__value">{formatMoney(value)}</div>
                {!isNaN(total) && <div className="item__percentage">{percent} %</div>}
                <div className="item__delete">
                    <button className="item__delete--btn" onClick={() => { removeBudget() }}><i className="ion-ios-close-outline" /></button>
                </div>
            </div>
        </div>
    )
}
