import React from 'react'
import "./button.css";
import IconLoading from '../IconLoading';
import cls from "classnames";

export default function ButtonCustom({ isLoadingIcon, isTagA, colorStyle, sizeStyle, children, ...restProp }) {

    const colorClass = "btn-" + colorStyle;
    const sizeClass = "btn-size-" + sizeStyle;
    const classComponent = cls("btn", { [colorClass]: colorStyle, [sizeClass]: sizeStyle });

    if (isTagA) {
        return (
            <a className={classComponent} {...restProp}>{isLoadingIcon && <IconLoading />} {children}</a>
        )
    }

    return (
        <button className={classComponent} {...restProp}>
            {isLoadingIcon && <IconLoading />}
            {children}
        </button>
    )

}
