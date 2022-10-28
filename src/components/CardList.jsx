import React from 'react';
import CardItem from './CardItem';
import axios from 'axios';

function CardList() {
  const [arr, setArr] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getInfo = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://635add296f97ae73a6387aaa.mockapi.io/items`);
      setArr(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getInfo();
  }, []);

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
