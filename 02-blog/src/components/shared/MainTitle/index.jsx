import React from 'react'
import ButtonCustom from '../Button'
import "./main-title.css"
export default function MainTitle({ title, isStyleSearch, isShowButtonCustom, buttonName, goto }) {
    let styleTitle = "main-title spacing ";
    styleTitle += isStyleSearch ? "main-title__search" : "d-flex tcl-jc-between tcl-ais-center";
    return (
        <div className={styleTitle}>
            <h2>{title}</h2>
            {isShowButtonCustom ? <ButtonCustom buttonName={buttonName} goto={goto} /> : <></>}
        </div>
    )
}
