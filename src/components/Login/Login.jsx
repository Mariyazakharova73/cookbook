import React from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';
import '../Login/Login.css';

function Login() {
  const { values, handleChange, errors, isValid, handleBlur, setValues } = useFormAndValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = values;
    //если нет email или password, то не делаем запрос (ранний выход)
    if (!email || !password) return;
    //onLogin(email, password);
  }

  return (
    <div className="login__form-wrapper">
      <form className="login__form form" onSubmit={handleSubmit} noValidate>
        <h2 className="login__form-title">Вход</h2>
        <div className="login__input-wrapper">
          <input
            onBlur={handleBlur}
            className="login__form-input"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className='login__form-err'>
            {errors.email || " "}
          </span>
          <input
            onBlur={handleBlur}
            className="login__form-input"
            type="password"
            placeholder="Пароль"
            name="password"
            minLength="5"
            maxLength="30"
            value={values.password || ''}
            onChange={handleChange}
          />
          <span
            className='login__form-err'
          >
            {errors.password || " "} 
          </span>
        </div>
        <button className="login__form-button" type="submit" disabled={!isValid}>
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
