import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPopupAddOpen: false,
  isPopupEditOpen: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setIsPopupAddOpen(state, action) {
      state.isPopupAddOpen = action.payload;
    },
    setIsPopupEditOpen(state, action) {
      state.isPopupEditOpen = action.payload;
    },
  },
});

export const { setIsPopupAddOpen, setIsPopupEditOpen } = popupSlice.actions;

export const selectPopupAdd = (state) => state.popup.isPopupAddOpen;
export const selectPopupEdit = (state) => state.popup.isPopupEditOpen;

export default popupSlice.reducer;
