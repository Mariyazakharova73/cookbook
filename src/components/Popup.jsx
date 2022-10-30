import React from 'react';

function PopupEdit({ onClose, handleChange, handleSubmit, inputValues, titleText }) {
  return (
    <div className="popup__content">
      <button className="popup__close" type="button" onClick={onClose} />
      <div className="popup__form-content">
        <h2 className="popup__form-heading">{titleText}</h2>
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
          <textarea
            name="ingredients"
            onChange={handleChange}
            value={inputValues.ingredients || ''}
            className="popup__form-textarea"
            type="text"
            placeholder="Список ингредиентов"
            minLength="2"
            required
          />
          <textarea
            name="description"
            onChange={handleChange}
            value={inputValues.description || ''}
            className="popup__form-textarea"
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
  );
}

export default PopupEdit;
