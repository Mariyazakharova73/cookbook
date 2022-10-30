import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCard, setInfo } from '../redux/slices/cardsSlice';
import handleLike from '../utils/utils.js';

function FullInfo({ onCardDelete, handlePopupEditOpen, handleLikeCard }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.cards.info);

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

  const isLiked = info.likes.some((i) => i.userId === '1111111');

  const handleLikeClick = () => {
    handleLike(info, handleLikeCard);
  };

  const handleDeleteClick = () => {
    onCardDelete(info.id);
    navigate('/');
  };

  const handleEditClick = () => {
    handlePopupEditOpen();
    dispatch(setSelectedCard(info));
  };

  return (
    <div className="info">
      <img className="info__image" src={info.url} alt={`${info.title}.`} />
      <div className="info__container">
        <h2 className="info__title">{info.title}</h2>
        <p>Сложность приготовления: {info.type}</p>
        <p>Ингредиенты: {info.ingredients}</p>
        <h3>Приготовление</h3>
        <p>{info.description}</p>
        <div className="button-like__container">
          <button
            onClick={handleLikeClick}
            className={`button-like ${isLiked ? 'button-like_active' : ''}`}
            type="button"
          />
          <p className="button-like__number">{info.likes.length}</p>
        </div>
        <div className="card__button-container">
          <button className="button" onClick={handleEditClick}>
            Редактировать
          </button>
          <button className="button" onClick={handleDeleteClick}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default FullInfo;
