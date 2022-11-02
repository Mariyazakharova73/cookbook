import React from 'react';
import Search from './Search/Search';
import CardList from './CardList/CardList';
import Sort from './Sort/Sort';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from '../redux/slices/cardsSlice';
import {
  setSortType,
  setLoading,
  selectSortType,
  selectSearchValue,
} from '../redux/slices/filterSlise';

function Home({ onCardDelete, handlePopupEditOpen, handleLikeCard }) {
  const sortType = useSelector(selectSortType);
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  const getInfo = async () => {
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `https://635add296f97ae73a6387aaa.mockapi.io/items?&sortBy=${sortBy}&order=${order}${search}`
      );
      dispatch(setCards(res.data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  React.useEffect(() => {
    getInfo();
  }, [sortType.sortProperty, searchValue]);

  return (
    <>
      <Search />
      <Sort onChangeSort={(i) => dispatch(setSortType(i))} />
      <CardList
        onCardDelete={onCardDelete}
        handlePopupEditOpen={handlePopupEditOpen}
        handleLikeCard={handleLikeCard}
      />
    </>
  );
}

export default Home;
