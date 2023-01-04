import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import useAuthenticated from '../customHook/useIsAuthenticated';
import { validate } from '../helpers';
import { actAsyncRegister } from '../store/user/actions';
import './LoginPage/login.css';

function RegisterPage() {
  useAuthenticated();
  
  const [form, setForm] = useState({
    email: "",
    nickname: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState({});
  const [messageError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  function setField(field, event) {
    const value = event.target.value;
    setForm({ ...form, [field]: value });
    setError({
      ...error, [field]: validate[field]?.({ value }) || { isError: false, message: "" }
    });
  }
  const checkAllField = () => {
    const keys = Object.keys(form);
    let i;
    const listError = { ...error };
    let isError = false;
    for (i = 0; i < keys.length; i++) {
      const field = keys[i];
      listError[field] = validate[field]?.({ value: form[field] }) || { isError: false, message: "" };
      if (listError[field].isError) {
        isError = true;
      }
    }
    setError(listError);
    return isError;
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!checkAllField()) {
      setLoading(true);
      dispatch(actAsyncRegister(form.email, form.username, form.password, form.nickname)).then(({ status, message }) => {
        if (status) {
          history.push("/login");
        }
        else {
          setMessageError(message);
        }
        setLoading(false);
      });
    }
  }
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              <p style={{ color: "#ee2c5a", fontSize: 14 }}>{messageError}</p>
              <form autoComplete="off">
                <Input label="Email" placeholder="Nhập email ..." autoComplete="off" isError={error.email?.isError} messageError={error.email?.message} onChange={e => setField("email", e)} />
                <Input label="Nickname" placeholder="Nhập Nickname" autoComplete="off" isError={error.nickname?.isError} messageError={error.nickname?.message} onChange={(e) => setField("nickname", e)} />
                <Input label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." autoComplete="off" isError={error.username?.isError} messageError={error.username?.message} onChange={(e) => setField("username", e)} />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  isError={error.password?.isError} messageError={error.password?.message} onChange={(e) => setField("password", e)}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" onClick={e => handleSubmitForm(e)} loading={loading}>
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
