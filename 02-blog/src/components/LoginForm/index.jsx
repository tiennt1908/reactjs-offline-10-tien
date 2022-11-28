import React from 'react';
import ButtonCustom from '../shared/Button';
import InputCustom from '../shared/Input';
import "./login.css";
import { Link } from 'react-router-dom';

export default function LoginForm() {
    return (
        <main className="login">
            <div className="spacing" />
            <div className="tcl-container">
                <div className="tcl-row">
                    <div className="tcl-col-12 tcl-col-sm-6 block-center">
                        <h1 className="form-title text-center">Login</h1>
                        <div className="form-login-register">
                            <form>
                                <InputCustom isInputForm={true} inputLabel="Username" inputType="text" inputPlaceholder="Enter Username ..."/>
                                <InputCustom isInputForm={true} inputLabel="Password" inputType="password" inputPlaceholder="Enter Password ..."/>
                                <div className="d-flex tcl-jc-between tcl-ais-center">
                                    <ButtonCustom isLoginButton={true} buttonName="Submit" />
                                    <Link to="register.html">Regiter</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacing" />
        </main>
    )
}
