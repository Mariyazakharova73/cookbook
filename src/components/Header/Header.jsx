import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Header/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../redux/slices/loginSlice';

function Header({ handlePopupAddOpen }) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  console.log(isLoggedIn);

  const signOut = () => {
    dispatch(setIsLoggedIn(false));
    history('/');
  };

  return (
    <header className="header">
      <Link className="header__link" to="/">
        <h2>Cookbook</h2>
      </Link>
      <div className="header__button-container">
        {isLoggedIn ? (
          <>
            <Link
              className="button"
              onClick={handlePopupAddOpen}
            >
              Добавить рецепт
            </Link>
            <Link onClick={signOut} className="button" to="/sign-in">
              Выйти
            </Link>
          </>
        ) : (
          <>
            <Link className="button">Создать аккаунт</Link>
            <Link className="button" to="/sign-in">
              Войти
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
