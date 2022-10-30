import React from 'react';
import Popup from './Popup';

function PopupAdd({ onClose, onAddCard }) {
  const [inputValues, setInputValues] = React.useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddCard({ ...inputValues, likes: [], mainIgredients: '' });
    onClose();
    setInputValues('');
  }

  return (
    <Popup
      onClose={onClose}
      titleText="Добавить рецепт"
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      inputValues={inputValues}
    />
  );
}

export default PopupAdd;
