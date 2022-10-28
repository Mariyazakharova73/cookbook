import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/"><h2>Cookbook</h2></Link>
      <div className="header__button-container">
        <button className="header__button">Войти</button>
        <button className="header__button">Создать аккаунт</button>
      </div>
    </header>
  );
}

export default Header;
