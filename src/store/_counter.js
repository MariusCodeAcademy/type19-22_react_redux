import { createSlice } from '@reduxjs/toolkit';

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

export default counterSlice;
