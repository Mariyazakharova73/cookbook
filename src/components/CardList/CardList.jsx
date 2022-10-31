import React from 'react';
import CardItem from '../CardItem/CardItem';
import { useSelector } from 'react-redux';
import '../CardList/CardList.css'

function CardList({ loading, onCardDelete, handlePopupEditOpen, handleLikeCard }) {
  const cards = useSelector((state) => state.cards.cardsArr);

  return (
    <div>
      <h1>Рецепты</h1>
      <ul className="cards__list">
        {loading ? (
          <div>Загрузка...</div>
        ) : (
          cards.map((item) => (
            <CardItem
              key={item.id}
              {...item}
              onCardDelete={onCardDelete}
              handlePopupEditOpen={handlePopupEditOpen}
              handleLikeCard={handleLikeCard}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default CardList;
