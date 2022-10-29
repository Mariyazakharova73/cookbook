import React from 'react';
import './../index.css';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Popup from './Popup';
import Popup2 from './Popup2';
import FullInfo from './FullInfo';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCards, addCard, deleteCard, editCard } from '../redux/slices/cardsSlice'


function App() {
  const [isPopupAddOpen, setIsPopupAddOpen] = React.useState(false);
  const [isPopupEditOpen, setIsPopupEditOpen] = React.useState(false);
  const cards = useSelector((state) => state.cards.cardsArr);
  const dispatch = useDispatch()

  function closeAllPopups() {
    setIsPopupAddOpen(false);
    setIsPopupEditOpen(false);
  }

  function handlePopupAddOpen() {
    setIsPopupAddOpen(true);
  }

  function handlePopupEditOpen(data) {
    setIsPopupEditOpen(true);
  }

  async function handleAddCard(cardObj) {
    try {
      const res = await axios.post('https://635add296f97ae73a6387aaa.mockapi.io/items', cardObj);
      //dispatch(setCards([res.data, ...cards]));
      dispatch(addCard(res.data))
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteCard(id) {
    try {
      const res = await axios.delete('https://635add296f97ae73a6387aaa.mockapi.io/items/' + id);
      //dispatch(setCards(cards.filter((obj) => obj.id !== res.data.id)));
      dispatch(deleteCard(res.data.id))
    } catch (err) {
      console.log(err);
    }
  }

  async function handleEditCard(cardObj) {
    try {
      const res = await axios.put('https://635add296f97ae73a6387aaa.mockapi.io/items/'+ cardObj.id, cardObj);
      dispatch(editCard(res.data))
      //dispatch(setCards(cards.filter((obj) => obj.id !== res.data.id)));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLikeCard(cardObj) {
    try {
      const res = await axios.put('https://635add296f97ae73a6387aaa.mockapi.io/items/'+ cardObj.id, cardObj);
      dispatch(editCard(res.data))
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="page">
      <div className="page__wrapper">
        <Header handlePopupAddOpen={handlePopupAddOpen} />
        <Routes>
          <Route path="/" element={<Home onCardDelete={handleDeleteCard} handlePopupEditOpen={handlePopupEditOpen} handleLikeCard={handleLikeCard}/>} />
          <Route path="/:id" element={<FullInfo />}></Route>
          <Route path="*" element={<h2>Страница не найдена 😕</h2>}></Route>
        </Routes>
        <Popup isOpen={isPopupAddOpen} onClose={closeAllPopups} onAddCard={handleAddCard} />
        <Popup2 isOpen={isPopupEditOpen} onClose={closeAllPopups} handleEditCard={handleEditCard} />
      </div>
    </div>
  );
}

export default App;
