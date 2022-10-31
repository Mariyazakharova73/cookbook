import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

function Header({ handlePopupAddOpen }) {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <h2>Cookbook</h2>
      </Link>
      <div className="header__button-container">
        <Link className="button" onClick={handlePopupAddOpen}>
          Добавить рецепт
        </Link>
        <Link className="button" to="/sign-in">
          Войти
        </Link>
        <Link className="button" to="sign-up">
          Создать аккаунт
        </Link>
      </div>
    </header>
  );
}

export default Header;
