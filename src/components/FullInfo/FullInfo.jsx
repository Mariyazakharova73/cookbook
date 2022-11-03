import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCard, setInfo, selectInfo } from '../../redux/slices/cardsSlice';
import handleLike from '../../utils/utils.js';
import '../FullInfo/FullInfo.css';
import { selectIsLoggedIn } from '../../redux/slices/loginSlice';
import { setIsPopupEditOpen } from '../../redux/slices/popupSlice';

function FullInfo({ onCardDelete, handleLikeCard }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const info = useSelector(selectInfo);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  React.useEffect(() => {
    async function fetchInfo() {
      try {
        const { data } = await axios.get('https://635add296f97ae73a6387aaa.mockapi.io/items/' + id);
        dispatch(setInfo(data));
      } catch (err) {
        console.log(err);
        navigate('/');
      }
    }
    fetchInfo();
  }, []);

  if (!info) {
    return <>Загрузка...</>;
  }

  const isLiked = info.likes.some((i) => i.email === 'test12345@yandex.ru');

  const handleLikeClick = () => {
    handleLike(info, handleLikeCard);
  };

  const handleDeleteClick = () => {
    onCardDelete(info.id);
    navigate('/');
  };

  const handleEditClick = () => {
    dispatch(setIsPopupEditOpen(true));
    dispatch(setSelectedCard(info));
  };

  return (
    <div className="info">
      <img className="info__image" src={info.url} alt={`${info.title}.`} />
      <div className="info__container">
        <h2 className="info__title">{info.title}</h2>
        <p className="info__text">Сложность приготовления: {info.type}</p>
        <p className="info__text">Ингредиенты: {info.ingredients}</p>
        <h3>Приготовление</h3>
        <p className="info__text">{info.description}</p>
        <div className="button-like__container">
          {isLoggedIn ? (
            <button
              onClick={handleLikeClick}
              className={`button-like ${isLiked ? 'button-like_active' : ''}`}
              type="button"
            />
          ) : (
            <button
              style={{ cursor: 'text' }}
              className={`button-like ${isLiked ? 'button-like_active' : ''}`}
              type="button"
            />
          )}
          <p className="button-like__number">{info.likes.length}</p>
        </div>
        {isLoggedIn ? (
          <div className="card__button-container">
            <button className="button" onClick={handleEditClick}>
              Редактировать
            </button>
            <button className="button" onClick={handleDeleteClick}>
              Удалить
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default FullInfo;
