import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardsArr: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards(state, action) {
      state.cardsArr = action.payload;
    },
  },

});

export const { setCards } = cardsSlice.actions;


export default cardsSlice.reducer;
