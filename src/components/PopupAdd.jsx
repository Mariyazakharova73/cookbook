import React from 'react';
import Popup from './Popup';

function PopupAdd({ onClose, onAddCard, isOpen }) {
  const [inputValues, setInputValues] = React.useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  };


  function onSubmit() {
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddCard({ ...inputValues, likes: [], mainIgredients: '' });
    onClose();
    setInputValues('');
  }

  return (
    <Popup
      onClose={onClose}
      titleText="Добавить рецепт"
      onSubmit={onSubmit}
      handleChange={handleChange}
      inputValues={inputValues}
    />
  );
}

export default PopupAdd;
