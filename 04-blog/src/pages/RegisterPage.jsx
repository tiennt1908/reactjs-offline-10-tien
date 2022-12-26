import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import { validate } from '../helpers';
import './LoginPage/login.css';

function RegisterPage() {
  const [form, setForm] = useState({
    nickName: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState({})

  function setField(field, event) {
    const value = event.target.value;
    const dataValidate = { value }
    if (field === "confirmPassword") {
      dataValidate.password = form.password;
    }
    setForm({ ...form, [field]: value });
    setError({
      ...error, [field]: validate[field]?.(dataValidate) || { isError: false, message: "" }
    });
  }
  const checkAllField = () => {
    const keys = Object.keys(form);
    let i;
    const listError = { ...error };
    let isError = false;
    for (i = 0; i < keys.length; i++) {
      const field = keys[i];
      const dataValidate = { value: form[field] }
      if (field === "confirmPassword") {
        dataValidate.password = form.password;
      }
      listError[field] = validate[field]?.(dataValidate) || { isError: false, message: "" };
      if (listError[field].isError) {
        isError = true;
      }
    }
    setError(listError);
    return isError;
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    checkAllField()
  }
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              <form autoComplete="off">
                <Input label="Nickname" placeholder="Nhập Nickname" autoComplete="off" isError={error.nickName?.isError} messageError={error.nickName?.message} onChange={(e) => setField("nickName", e)} />
                <Input label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." autoComplete="off" isError={error.username?.isError} messageError={error.username?.message} onChange={(e) => setField("username", e)} />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  isError={error.password?.isError} messageError={error.password?.message} onChange={(e) => setField("password", e)}
                />
                <Input
                  type="password"
                  label="Xác nhận mật khẩu"
                  placeholder="Xác nhận mật khẩu ..."
                  autoComplete="new-password"
                  isError={error.confirmPassword?.isError} messageError={error.confirmPassword?.message} onChange={(e) => setField("confirmPassword", e)}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" onClick={e => handleSubmitForm(e)}>
                    Đăng ký
                  </Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default RegisterPage;
