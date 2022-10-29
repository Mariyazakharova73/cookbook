import React from 'react';
import './../index.css';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Popup from './Popup';
import FullInfo from './FullInfo';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCards } from '../redux/slices/cardsSlice'


function App() {
  const [isPopupAddOpen, setIsPopupAddOpen] = React.useState(false);
  const [isPopupEditOpen, setIsPopupEditOpen] = React.useState(false);
  const cards = useSelector((state) => state.cards.cardsArr);
  const dispatch = useDispatch()
  console.log(cards)

  function closeAllPopups() {
    setIsPopupAddOpen(false);
    setIsPopupEditOpen(false);
  }

  function handlePopupAddClick() {
    setIsPopupAddOpen(true);
  }

  async function handleAddCard(cardObj) {
    try {
      const res = await axios.post('https://635add296f97ae73a6387aaa.mockapi.io/items', cardObj);
      dispatch(setCards([res.data, ...cards]));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteCard(id) {
    try {
      const res = await axios.delete('https://635add296f97ae73a6387aaa.mockapi.io/items/' + id);
      dispatch(setCards(cards.filter((obj) => obj.id !== res.data.id)));
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="page">
      <div className="page__wrapper">
        <Header handlePopupAddClick={handlePopupAddClick} />
        <Routes>
          <Route path="/" element={<Home onCardDelete={handleDeleteCard}/>} />
          <Route path="/:id" element={<FullInfo />}></Route>
          <Route path="*" element={<h2>Страница не найдена 😕</h2>}></Route>
        </Routes>
        <Popup isOpen={isPopupAddOpen} onClose={closeAllPopups} onAddCard={handleAddCard} />
      </div>
    </div>
  );
}

export default App;
