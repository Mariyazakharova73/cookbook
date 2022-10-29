import React from 'react';

function Popup({ isOpen, onClose, onAddCard }) {
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
    <div className={`popup  ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={onClose} />
        <div className="popup__form-content">
          <h2 className="popup__form-heading">Добавить рецепт</h2>
          <form className="popup__form form" onSubmit={handleSubmit}>
            <input
              name="title"
              onChange={handleChange}
              value={inputValues.title || ''}
              className={`popup__form-input ${false ? 'popup__form-input_type_error' : ''}`}
              type="text"
              placeholder="Название блюда"
              minLength="2"
              maxLength="100"
              required
            />
            <input
              name="url"
              onChange={handleChange}
              value={inputValues.url || ''}
              className={`popup__form-input ${false ? 'popup__form-input_type_error' : ''}`}
              type="url"
              placeholder="Ссылка на фото"
              minLength="2"
            />
            <input
              name="type"
              onChange={handleChange}
              value={inputValues.type || ''}
              className="popup__form-input"
              type="text"
              placeholder="Сложность (сложно/легко)"
              minLength="2"
              required
            />
            <input
              name="ingredients"
              onChange={handleChange}
              value={inputValues.ingredients || ''}
              className="popup__form-input"
              type="text"
              placeholder="Список ингредиентов"
              minLength="2"
              required
            />
            <input
              name="description"
              onChange={handleChange}
              value={inputValues.description || ''}
              className="popup__form-input"
              type="text"
              placeholder="Порядок приготовления"
              minLength="2"
              required
            />
            <button
              disabled={false}
              className={
                true ? `popup__form-button` : `popup__form-button popup__form-button_inactive`
              }
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;
