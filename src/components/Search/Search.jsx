import React from 'react';
import '../Search/Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue, selectSearchValue } from '../../redux/slices/filterSlise';

function Search() {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);

  const onChangeInput = (evt) => {
    dispatch(setSearchValue(evt.target.value));
  };

  const onClickClear = () => {
    dispatch(setSearchValue(''));
  };

  return (
    <div className="search">
      <div className="search__input-wrapper">
        <svg className="search__icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <title />
          <g id="search">
            <path
              d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"
              fill="white"
            />
          </g>
        </svg>
        <input
          value={searchValue}
          onChange={onChangeInput}
          className="search__input"
          placeholder="Поиск рецепта..."
        />
        {searchValue && (
          <svg
            onClick={onClickClear}
            className="search__clear-icon"
            data-name="Capa 1"
            id="Capa_1"
            viewBox="0 0 20 19.84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default Search;
