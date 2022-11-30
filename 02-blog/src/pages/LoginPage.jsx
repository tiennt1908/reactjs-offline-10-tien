import React from 'react';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  )

}
