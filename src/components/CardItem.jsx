import React from 'react';
import redCircle from '../images/red-circle.png';
import greenCircle from '../images/green-circle.png';

function CardItem({ id, title, url, types, mainIgredients, ingredients, description, likes }) {
  const [isLikeActive, setIsLikeActive] = React.useState(false);
  const handleLikeClick = () => {
    setIsLikeActive(!isLikeActive);
  };

  return (
    <>
      <li className="card__item">
        <img className="card__image" src={url} alt="bbb" />
        <div className="card__wrapper">
          <h2 className="card__title">{title}</h2>
          <div className="card__info">
            <img className="card__info-img" src={types ? greenCircle : redCircle} alt="hhh" />
            <p>Сложность приготовления: {types ? 'сложно' : 'легко'}</p>
          </div>
          <p className="card__ingredients">{`Базовые ингредиенты: ${mainIgredients}`}</p>
          <div className="button-like__container">
            <button
              onClick={() => handleLikeClick()}
              className={`button-like ${isLikeActive ? 'button-like_active' : ''}`}
              type="button"
            />
            <p className="button-like__number">{likes}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
