import React from 'react';
import CardItem from './CardItem';


function CardList({arr, loading}) {
  return (
    <div>
      <h1>Рецепты</h1>
      <ul className="cards__list">
        {loading ? <div>Загрузка...</div> : arr.map((item) => <CardItem key={item.id} {...item} />)}
      </ul>
    </div>
  );
}

export default CardList;
