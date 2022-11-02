import React from 'react';
import '../../index.js';
import '../App/App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import PopupAdd from '../PopupAdd';
import PopupEdit from '../PopupEdit';
import FullInfo from '../FullInfo/FullInfo';
import Login from '../Login/Login';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, deleteCard, editCard, setInfo } from '../../redux/slices/cardsSlice';
import Wrapper from '../Wrapper';
import { selectPopupAdd, selectPopupEdit } from '../../redux/slices/popupSlice';

function App() {
  const isPopupAddOpen = useSelector(selectPopupAdd);
  const isPopupEditOpen = useSelector(selectPopupEdit);
  const dispatch = useDispatch();

  async function handleAddCard(cardObj) {
    try {
      const res = await axios.post('https://635add296f97ae73a6387aaa.mockapi.io/items', cardObj);
      dispatch(addCard(res.data));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteCard(id) {
    try {
      const res = await axios.delete('https://635add296f97ae73a6387aaa.mockapi.io/items/' + id);
      dispatch(deleteCard(res.data.id));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleEditCard(cardObj) {
    try {
      const res = await axios.put(
        'https://635add296f97ae73a6387aaa.mockapi.io/items/' + cardObj.id,
        cardObj
      );
      dispatch(setInfo(cardObj));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLikeCard(cardObj) {
    try {
      const res = await axios.put(
        'https://635add296f97ae73a6387aaa.mockapi.io/items/' + cardObj.id,
        cardObj
      );
      dispatch(editCard(res.data));
      dispatch(setInfo(cardObj));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home handleLikeCard={handleLikeCard} />} />
          <Route
            path="/:id"
            element={<FullInfo onCardDelete={handleDeleteCard} handleLikeCard={handleLikeCard} />}
          ></Route>
          <Route path="/sign-in" element={<Login title="Вход" buttonText="Войти" />}></Route>
          <Route path="*" element={<h2>Страница не найдена 😕</h2>}></Route>
        </Routes>
        <Wrapper isOpen={isPopupAddOpen}>
          <PopupAdd onAddCard={handleAddCard} />
        </Wrapper>
        <Wrapper isOpen={isPopupEditOpen}>
          <PopupEdit isOpen={isPopupEditOpen} handleEditCard={handleEditCard} />
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
