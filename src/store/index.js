// import { createStore } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './_counter';
import authSlice from './_auth';

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
