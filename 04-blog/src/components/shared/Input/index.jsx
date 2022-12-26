import cls from 'classnames';
import { useState } from 'react';
import IconSearch from '../IconSearch';
import './input.css';

function Input({ label, type = 'text', className, icon = <IconSearch />, isError, messageError, ...restProps }) {
  const [localType, setLocalType] = useState(type);

  function handleToggleShowPwd() {
    if (localType === 'password') {
      setLocalType('text');
    } else if (localType === 'text') {
      setLocalType('password');
    }
  }

  const classesIconPwd = cls('toggle-password', {
    'ion-eye': localType === 'password',
    'ion-eye-disabled': localType === 'text',
  });
  const classesSearch = cls('input-search__input', className);

  if (type === 'search') {
    return (
      <div className="input-search">
        {icon}
        <input className={classesSearch} type={localType} {...restProps} />
      </div>
    );
  }
  const styleError = isError ? { border: "1px solid #ee2c5a" } : {};

  return (
    <div className="form-control">
      {label && <label>{label}</label>}
      {type === 'password' && <i className={classesIconPwd} onClick={handleToggleShowPwd}></i>}
      <input type={localType} className={className} {...restProps} style={styleError} />
      <span style={{ color: "#ee2c5a", fontSize: 14, position: "absolute" }}>{messageError}</span>
    </div>
  );
}

export default Input;
