import React from 'react';
import Popup from './Popup/Popup';
import { useFormAndValidation } from '../hooks/useFormAndValidation.js';

function PopupAdd({ onClose, onAddCard, isOpen }) {
  const { values, setValues, errors, isValid, handleBlur, handleChange } = useFormAndValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddCard({ ...values, likes: [], mainIgredients: '' });
    onClose();
    setValues('');
  }

  return (
    <Popup
      onClose={onClose}
      handleChange={handleChange}
      values={values}
      isValid={isValid}
      errors={errors}
      handleBlur={handleBlur}
      handleSubmit={handleSubmit}
      titleText="Добавить рецепт"
    />
  );
}

export default PopupAdd;
