import React from 'react';
import Popup from './Popup/Popup';
import { useFormAndValidation } from '../hooks/useFormAndValidation.js';

function PopupAdd({ onClose, onAddCard, isOpen }) {
  const { values, setValues } = useFormAndValidation({});

  function handleSubmit() {
    onAddCard({ ...values, likes: [], mainIgredients: '' });
    onClose();
    setValues('');
  }

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      titleText="Добавить рецепт"
      handleSubmit={handleSubmit}
    />
  );
}

export default PopupAdd;
