import React from 'react';
import redCircle from '../images/red-circle.png';
import greenCircle from '../images/green-circle.png';
import { Link } from 'react-router-dom';

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
}) {
  const [isLikeActive, setIsLikeActive] = React.useState(false);
  const handleLikeClick = (id) => {
    setIsLikeActive(!isLikeActive);
  };

  const handleDeleteClick = (id) => {
    onCardDelete(id);
  };

  return (
    <>
      <li className="card__item">
        <Link to={`/${id}`}>
          <img className="card__image" src={url} alt="bbb" />
        </Link>
        <div className="card__wrapper">
          <h2 className="card__title">{title}</h2>
          <div className="card__info">
            {/* <img className="card__info-img" src={type ? greenCircle : redCircle} alt="hhh" /> */}
            <p>Сложность приготовления: {type}</p>
          </div>
          <p className="card__ingredients">{`Базовые ингредиенты: ${mainIgredients}`}</p>
          <div className="button-like__container">
            <button
              onClick={() => handleLikeClick(id)}
              className={`button-like ${isLikeActive ? 'button-like_active' : ''}`}
              type="button"
            />
            <p className="button-like__number">{likes}</p>
          </div>
          <div className="card__button-container">
            <button className="button">Редактировать</button>
            <button className="button" onClick={() => handleDeleteClick(id)}>
              Удалить
            </button>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
