import { configureStore } from '@reduxjs/toolkit';
import cards from './slices/cardsSlice';

//configureStore создает хранилище
export const store = configureStore({
  reducer: { cards },
});
