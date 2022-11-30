import React from 'react';
import ButtonCustom from '../shared/Button';
import InputCustom from '../shared/Input';
import "./login.css";
import { Link } from 'react-router-dom';

export default function LoginForm() {

    return (
        <form>
            <InputCustom label="Username" type="text">Enter Username ...</InputCustom>
            <InputCustom label="Password" type="password">Enter Password ...</InputCustom>
            <div className="d-flex tcl-jc-between tcl-ais-center">
                <ButtonCustom colorStyle="primary" sizeStyle="large" >Submit</ButtonCustom>
                <Link to="register.html">Regiter</Link>
            </div>
        </form>
    )

}
