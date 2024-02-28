// import { createStore } from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const initCounterState = { counterValue: 5, showCounter: true };

// createSlice.reducer naudoja vidini paketa immer kuris neleidzia mutuoti state

const counterSlice = createSlice({
  name: 'counter',
  initialState: initCounterState,
  reducers: {
    up(state) {
      // veiksmas up del immer nera mutacija
      state.counterValue++;
    },
    down(state) {
      state.counterValue = state.counterValue - 1;
    },
    upBy(state, action) {
      console.log('action ===', action);
      state.counterValue += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// sukuriam pagr reducer kintamaji
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const cActions = counterSlice.actions;
console.log('counterActions ===', cActions);

export const authAction = authSlice.actions;
console.log('authAction ===', authAction);
export default store;
