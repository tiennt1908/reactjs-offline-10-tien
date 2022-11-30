import React from 'react';
import ButtonCustom from '../Button';
import "./main-title.css";
import cls from "classnames";

export default function MainTitle({ isStyleSearch, children, buttonName, ...btnRestProp }) {

    const classTitle = cls("main-title spacing", { "main-title__search": isStyleSearch, "d-flex tcl-jc-between tcl-ais-center": !isStyleSearch });

    return (
        <div className={classTitle}>
            <h2>{children}</h2>
            {buttonName && <ButtonCustom colorStyle="default" isTagA={true} {...btnRestProp} >{buttonName}</ButtonCustom>}
        </div>
    )

}
