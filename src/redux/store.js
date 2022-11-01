import { configureStore } from '@reduxjs/toolkit';
import cards from './slices/cardsSlice';
import login from './slices/loginSlice';

export const store = configureStore({
  reducer: { cards, login },
});
