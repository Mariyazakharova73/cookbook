import React from 'react';
//import { useForm } from 'react-hook-form';
//import { linkChecking } from '../../utils/constants.js';
import './Popup.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';

function Popup({ onClose, titleText, handleSubmit }) {
  const { values, handleChange, errors, isValid, handleBlur } = useFormAndValidation({});

  return (
    <div className="popup__content">
      <button className="popup__close" type="button" onClick={onClose} />
      <div className="popup__form-content">
        <h2 className="popup__form-heading">{titleText}</h2>
        <form className="form popup__form" onSubmit={handleSubmit} noValidate>
          <input
            name="title"
            className="popup__form-input"
            onChange={handleChange}
            value={values.title || ''}
            type="text"
            placeholder="Название блюда"
            onBlur={handleBlur}
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__form-err">{errors.title}</span>
          <input
            name="url"
            className="popup__form-input"
            onChange={handleChange}
            value={values.url || ''}
            type="url"
            placeholder="Ссылка на фото"
            onBlur={handleBlur}
            required
          />
          <span className="popup__form-err">{errors.url}</span>
          <input
            name="type"
            className="popup__form-input"
            onChange={handleChange}
            value={values.type || ''}
            type="text"
            placeholder="Сложность (сложно/легко)"
            onBlur={handleBlur}
            minLength="5"
            maxLength="6"
            required
          />
          <span className="popup__form-err">{errors.type}</span>
          <textarea
            name="ingredients"
            className="popup__form-textarea"
            onChange={handleChange}
            value={values.ingredients}
            type="text"
            placeholder="Список ингредиентов"
            onBlur={handleBlur}
            minLength="5"
            required
          />
          <span className="popup__form-err">{errors.ingredients}</span>
          <textarea
            name="description"
            className="popup__form-textarea"
            onChange={handleChange}
            value={values.description || ''}
            placeholder="Порядок приготовления"
            onBlur={handleBlur}
            required
            minLength="10"
          />
          <span className="popup__form-err">{errors.description}</span>
          <button disabled={!isValid} className="popup__form-button" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;

