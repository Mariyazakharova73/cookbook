import React from 'react';
import Popup from './Popup/Popup';
import { useFormAndValidation } from '../hooks/useFormAndValidation.js';
import { setIsPopupAddOpen } from '../redux/slices/popupSlice';
import { useDispatch } from 'react-redux';
import food from '../images/food.jpg';

function PopupAdd({ onAddCard }) {
  const { values, setValues, errors, isValid, handleBlur, handleChange } = useFormAndValidation({});
  const dispatch = useDispatch();

  function handleSubmit(evt) {
    let foodImg;
    if (!values.url) {
      foodImg = food;
    } else {
      foodImg = values.url;
    }
    evt.preventDefault();
    onAddCard({ ...values, likes: [], url: foodImg });
    dispatch(setIsPopupAddOpen(false));
    setValues('');
  }

  return (
    <Popup
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
