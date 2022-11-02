import React from 'react';
import { useSelector } from 'react-redux';
import Popup from './Popup/Popup';
import { useFormAndValidation } from '../hooks/useFormAndValidation.js';
import { selectCard } from '../redux/slices/cardsSlice';

function PopupEdit({ isOpen, onClose, handleEditCard }) {
  const { values, setValues, errors, isValid, handleBlur, handleChange, resetForm } =
    useFormAndValidation({});
  const selectedCard = useSelector(selectCard);

  React.useEffect(() => {
    resetForm();
    setValues(selectedCard);
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleEditCard(values);
    onClose();
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
      titleText="Редактировать рецепт"
    />
  );
}

export default PopupEdit;
