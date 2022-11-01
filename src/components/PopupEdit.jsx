import React from 'react';
import { useSelector } from 'react-redux';
import Popup from './Popup/Popup';
import { useFormAndValidation } from '../hooks/useFormAndValidation.js';

function PopupEdit({ isOpen, onClose, handleEditCard }) {
  const { values, setValues} = useFormAndValidation({});
  const selectedCard = useSelector((state) => state.cards.selectedCard);
  console.log(selectedCard)

  React.useEffect(() => {
    setValues(selectedCard);
  }, [isOpen]);

  function handleSubmit() {
    handleEditCard(values);
    onClose();
  }

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      titleText="Редактировать рецепт"
      handleSubmit={handleSubmit}
    />
  );
}

export default PopupEdit;
