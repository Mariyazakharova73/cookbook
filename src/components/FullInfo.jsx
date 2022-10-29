import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import redCircle from '../images/red-circle.png';
import greenCircle from '../images/green-circle.png';

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

  return (
    <div className="info">
      <img className="info__image" src={info.url} alt={`${info.title}.`} />
      <div className="info__container">
        <h2 className="info__title">{info.title}</h2>
        <div className="card__info">
          {/* <img className="card__info-img" src={info.types ? greenCircle : redCircle} alt="hhh" /> */}
          <p>Сложность приготовления: {info.types}</p>
        </div>
        <p>Ингредиенты: {info.ingredients}</p>
        <h3>Приготовление</h3>
        <p>{info.description}</p>
        <div className="button-like__container">
          <button className={`button-like ${false ? 'button-like_active' : ''}`} type="button" />
          <p className="button-like__number">{info.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default FullInfo;
