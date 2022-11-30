import React, { useState } from 'react';
import "./input.css";
import cls from "classnames";

export default function InputCustom({ isInputSearch, prefixTag, label, type, children, ...restProp }) {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const classIcon = cls("toggle-password", { "ion-eye-disabled": isShowPassword, "ion-eye": !isShowPassword });

    if (isInputSearch) {
        return (
            <div className="header-search">
                {prefixTag}
                <input className="header-search__input" type={type} placeholder={children} {...restProp} />
            </div>
        )
    }

    return (
        <div className="form-control">
            {label && <label>{label}</label>}
            {type === "password" && <i className={classIcon} onClick={() => { setIsShowPassword(!isShowPassword) }}></i>}
            <input type={isShowPassword ? "text" : type} placeholder={children} {...restProp} />
        </div>
    )
}
