import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import useAuthenticated from '../../customHook/useIsAuthenticated';
import { validate } from '../../helpers';
import { actAsyncLogin } from '../../store/user/actions';
import './login.css';

function LoginPage() {
  useAuthenticated();
  
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState({});
  const [messageError, setMessageError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

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
      dispatch(actAsyncLogin(form.username, form.password)).then(({ status, message }) => {
        if (status) {
          history.push("/");
        }
        else {
          setMessageError(message);
        }
        setLoading(false);
      })
    }
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng nhập</h1>
            <div className="form-login-register">
              <p style={{ color: "#ee2c5a", fontSize: 14 }}>{messageError}</p>
              <form autoComplete="off">
                <Input label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." autoComplete="off" isError={error.username?.isError} messageError={error.username?.message} onChange={e => setField("username", e)} />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  isError={error.password?.isError}
                  messageError={error.password?.message}
                  onChange={e => setField("password", e)}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" onClick={e => handleSubmitForm(e)} loading={isLoading}>
                    Đăng nhập
                  </Button>
                  <Link to="/register">Đăng ký</Link>
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

export default LoginPage;
