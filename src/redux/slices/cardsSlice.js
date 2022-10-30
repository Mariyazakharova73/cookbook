import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardsArr: [],
  selectedCard: {},
  info: null,
};


export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards(state, action) {
      state.cardsArr = action.payload;
    },
    addCard(state, action) {
      state.cardsArr = [action.payload, ...state.cardsArr];
    },
    deleteCard(state, action) {
      state.cardsArr = state.cardsArr.filter((obj) => obj.id !== action.payload);
    },
    editCard(state, action) {
      state.cardsArr = state.cardsArr.map((obj) =>
        obj.id === action.payload.id ? action.payload : obj
      );
    },
    setSelectedCard(state, action) {
      state.selectedCard = action.payload;
    },
    setInfo(state, action) {
      state.info = action.payload;
    },
    handleLikeCard(state, action) {
      state.cardsArr = state.cardsArr.map((obj) =>
        obj.id === action.payload.id ? action.payload : obj
      );
    },
  },
});

export const { setCards, setSelectedCard, addCard, deleteCard, editCard, handleLikeCard, setInfo } = cardsSlice.actions;

export default cardsSlice.reducer;
