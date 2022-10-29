import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function FullInfo() {
  const [info, setInfo] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchInfo() {
      try {
        const { data } = await axios.get('https://635add296f97ae73a6387aaa.mockapi.io/items/' + id);
        setInfo(data);
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

  return (
    <div className="info">
      <img className="info__image" src={info.url} alt={`${info.title}.`} />
      <div className="info__container">
        <h2 className="info__title">{info.title}</h2>
        <div className="card__info">
          <p>Сложность приготовления: {info.type}</p>
        </div>
        <p>Ингредиенты: {info.ingredients}</p>
        <h3>Приготовление</h3>
        <p>{info.description}</p>
        <div className="button-like__container">
          <button className={`button-like ${isLiked ? 'button-like_active' : ''}`} type="button" />
          <p className="button-like__number">{info.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default FullInfo;
