import { createSlice } from '@reduxjs/toolkit';

const initAuthState = { isLoggedIn: false, email: '' };
// reducers negali buti async
const authSlice = createSlice({
  name: 'auth',
  initialState: initAuthState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.email = action.payload;
    },
    loguot(state) {
      state.isLoggedIn = false;
    },
  },
});

export default authSlice;
