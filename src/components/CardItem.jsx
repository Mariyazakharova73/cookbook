import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedCard } from '../redux/slices/cardsSlice';

function CardItem({
  id,
  title,
  url,
  type,
  mainIgredients,
  ingredients,
  description,
  likes,
  onCardDelete,
  handlePopupEditOpen,
  handleLikeCard,
}) {
  
  const dispatch = useDispatch();
  const selectedCard = {
    id,
    title,
    url,
    type,
    mainIgredients,
    ingredients,
    description,
    likes,
    
  };
  const isLiked = selectedCard.likes.some((i) => i.userId === '1111111');
  const handleLikeClick = () => {
    if (selectedCard.likes.some((i) => i.userId === '1111111')) {
      const newArr = selectedCard.likes.filter((obj) => obj.userId !== '1111111');
      const newCard = { ...selectedCard, likes: newArr };
      handleLikeCard(newCard);
    } else {
      const newArr = [{ userId: '1111111' }, ...selectedCard.likes];
      const newCard = { ...selectedCard, likes: newArr };
      handleLikeCard(newCard);
    }
  };

  const handleDeleteClick = () => {
    onCardDelete(id);
  };

  const handleEditClick = () => {
    dispatch(setSelectedCard(selectedCard));
    handlePopupEditOpen();
  };

  return (
    <>
      <li className="card__item">
        <Link to={`/${id}`}>
          <img className="card__image" src={url} alt={`${title}.`} />
        </Link>
        <div className="card__wrapper">
          <h2 className="card__title">{title}</h2>
          <div className="card__info">
            <p>Сложность приготовления: {type}</p>
          </div>
          <p className="card__ingredients">{`Базовые ингредиенты: ${mainIgredients}`}</p>
          <div className="button-like__container">
            <button
              onClick={handleLikeClick}
              className={`button-like ${isLiked ? 'button-like_active' : ''}`}
              type="button"
            />
            <p className="button-like__number">{likes.length}</p>
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
      </li>
    </>
  );
}

export default CardItem;
