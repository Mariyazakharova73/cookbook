import { configureStore } from '@reduxjs/toolkit';
import cards from './slices/cardsSlice';
import login from './slices/loginSlice';
import filter from './slices/filterSlise';
import popup from './slices/popupSlice';

export const store = configureStore({
  reducer: { cards, login, filter, popup },
});
