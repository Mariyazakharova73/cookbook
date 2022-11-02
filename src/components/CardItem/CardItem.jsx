import React from 'react';
import { Link } from 'react-router-dom';
import handleLike from '../../utils/utils';
import '../CardItem/CardItem.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/slices/loginSlice';

function CardItem({
  id,
  title,
  url,
  type,
  mainIgredients,
  ingredients,
  description,
  likes,
  handleLikeCard,
}) {
  const card = {
    id,
    title,
    url,
    type,
    mainIgredients,
    ingredients,
    description,
    likes,
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLiked = card.likes.some((i) => i.email === 'test12345@yandex.ru');

  const handleLikeClick = () => {
    handleLike(card, handleLikeCard);
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
            {isLoggedIn ? (
              <button
                onClick={handleLikeClick}
                className={`button-like ${isLiked ? 'button-like_active' : ''}`}
                type="button"
              />
            ) : (
              <button
                style={{ cursor: 'not-allowed' }}
                className={`button-like ${isLiked ? 'button-like_active' : ''}`}
                type="button"
              />
            )}
            <p className="button-like__number">{likes.length}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
