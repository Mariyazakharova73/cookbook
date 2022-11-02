import React from 'react';
import './Popup.css';
import { useDispatch } from 'react-redux';
import { setIsPopupAddOpen, setIsPopupEditOpen } from '../../redux/slices/popupSlice';
import food from '../../images/food.jpg';

function Popup({ titleText, handleSubmit, handleChange, values, errors, handleBlur, isValid }) {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(setIsPopupAddOpen(false));
    dispatch(setIsPopupEditOpen(false));
  };

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
            name="mainIgredients"
            className="popup__form-input"
            onChange={handleChange}
            value={values.mainIgredients || ''}
            type="text"
            placeholder="Базовые ингредиенты"
            onBlur={handleBlur}
            minLength="2"
            maxLength="100"
          />
          <span className="popup__form-err">{errors.mainIgredients}</span>
          <input
            name="url"
            className="popup__form-input"
            onChange={handleChange}
            value={values.url || ''}
            type="url"
            placeholder="Ссылка на фото"
            onBlur={handleBlur}
          />
          <span className="popup__form-err">{errors.url}</span>
          <select
            name="type"
            className="popup__form-select"
            onChange={handleChange}
            onBlur={handleBlur}
            required
          >
            <option className="popup__form-option" value="легко">
              легко
            </option>
            <option className="popup__form-option" value="сложно">
              сложно
            </option>
          </select>
          <span className="popup__form-err"></span>
          <textarea
            name="ingredients"
            className="popup__form-textarea"
            onChange={handleChange}
            value={values.ingredients || ''}
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
