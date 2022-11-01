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
import { useDispatch } from 'react-redux';
import { addCard, deleteCard, editCard, setInfo } from '../../redux/slices/cardsSlice';
import Wrapper from '../Wrapper';

function App() {
  const [isPopupAddOpen, setIsPopupAddOpen] = React.useState(false);
  const [isPopupEditOpen, setIsPopupEditOpen] = React.useState(false);
  const dispatch = useDispatch();

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
      dispatch(addCard(res.data));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteCard(id) {
    try {
      const res = await axios.delete('https://635add296f97ae73a6387aaa.mockapi.io/items/' + id);
      //dispatch(setCards(cards.filter((obj) => obj.id !== res.data.id)));
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
      //dispatch(editCard(res.data))
      dispatch(setInfo(cardObj));
      //dispatch(setCards(cards.filter((obj) => obj.id !== res.data.id)));
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

  const closeByOverlay = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closeAllPopups();
    }
  };

  return (
    <div className="page">
      <div className="page__wrapper">
        <Header handlePopupAddOpen={handlePopupAddOpen} />
        <Routes>
          <Route path="/" element={<Home handleLikeCard={handleLikeCard} />} />
          <Route
            path="/:id"
            element={
              <FullInfo
                onCardDelete={handleDeleteCard}
                handlePopupEditOpen={handlePopupEditOpen}
                handleLikeCard={handleLikeCard}
              />
            }
          ></Route>
          <Route path="/sign-in" element={<Login title="Вход" buttonText="Войти" />}></Route>
          <Route path="*" element={<h2>Страница не найдена 😕</h2>}></Route>
        </Routes>
        <Wrapper isOpen={isPopupAddOpen} onClose={closeAllPopups} closeByOverlay={closeByOverlay}>
          <PopupAdd onClose={closeAllPopups} onAddCard={handleAddCard} />
        </Wrapper>
        <Wrapper isOpen={isPopupEditOpen} onClose={closeAllPopups} closeByOverlay={closeByOverlay}>
          <PopupEdit
            isOpen={isPopupEditOpen}
            onClose={closeAllPopups}
            handleEditCard={handleEditCard}
          />
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
