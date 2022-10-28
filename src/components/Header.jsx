import React from 'react';

function Header() {
  return (
    <header className="header">
      <h2>Cookbook</h2>
      <div className="header__button-container">
        <button className="header__button">Войти</button>
        <button className="header__button">Создать аккаунт</button>
      </div>
    </header>
  );
}

export default Header;
