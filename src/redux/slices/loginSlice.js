import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: (localStorage.getItem('isLoggedIn') === 'true'),
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = loginSlice.actions;

export const selectIsLoggedIn = (state) => state.login.isLoggedIn;

export default loginSlice.reducer;
