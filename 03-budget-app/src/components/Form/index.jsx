import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actAddItem } from '../../store/actions';
import { isEmpty } from '../../common/index';

export default function Form() {

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        type: "inc",
        description: "",
        amount: "",
    });

    const setField = (field, e) => {
        setInput({ ...input, [field]: e.target.value });
    }

    const addNewBudget = () => {
        if (isEmpty(input.description) || isEmpty(input.amount)) {
            alert("Khong de trong");
            return;
        }

        let amount = Math.abs(parseInt(input.amount));
        amount = input.type === "exp" ? -amount : amount;
        dispatch(actAddItem({ description: input.description, amount: amount }))
        setInput({ ...input, description: "", amount: "" })
    }

    const focusClass = input.type === "exp" && "red-focus";
    const btnFocusClass = input.type === "exp" && "red";

    return (
        <>
            <div className="add">
                <div className="add__container">
                    <select defaultValue="inc" className={"add__type " + focusClass} onChange={(e) => setField("type", e)}>
                        <option value="inc">+</option>
                        <option value="exp">-</option>
                    </select>
                    <input type="text" className={"add__description " + focusClass} placeholder="Add description" value={input.description} onChange={(e) => setField("description", e)} />
                    <input min={1} type="number" className={"add__value " + focusClass} placeholder="Value" value={input.amount} onChange={(e) => setField("amount", e)} />
                    <button className={"add__btn " + btnFocusClass}><i className="ion-ios-checkmark-outline" onClick={() => addNewBudget()} /></button>
                </div>
            </div>
        </>

    )
}
