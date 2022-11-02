import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Popup from './Popup/Popup';
import { useFormAndValidation } from '../hooks/useFormAndValidation.js';
import { selectCard } from '../redux/slices/cardsSlice';
import { setIsPopupEditOpen } from '../redux/slices/popupSlice';

function PopupEdit({ isOpen, handleEditCard }) {
  const { values, setValues, errors, isValid, handleBlur, handleChange, resetForm } =
    useFormAndValidation({});
  const dispatch = useDispatch();
  const selectedCard = useSelector(selectCard);

  React.useEffect(() => {
    resetForm();
    setValues(selectedCard);
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleEditCard(values);
    dispatch(setIsPopupEditOpen(false));
  }

  return (
    <Popup
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
