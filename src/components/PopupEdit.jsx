import React from 'react';
import { useSelector } from 'react-redux';
import Popup from './Popup';

function PopupEdit({ isOpen, onClose, handleEditCard }) {
  const [inputValues, setInputValues] = React.useState({});
  const selectedCard = useSelector((state) => state.cards.selectedCard);

  React.useEffect(() => {
    setInputValues(selectedCard);
  }, [isOpen]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    handleEditCard(inputValues);
    onClose();
    setInputValues('');
  }

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      titleText="Редактировать рецепт"
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      inputValues={inputValues}
    />
  );
}

export default PopupEdit;
