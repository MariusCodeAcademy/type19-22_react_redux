// import { createStore } from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit';

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
      state.showCounter = state.counterValue - 1;
    },
    upBy() {},
    toggle() {},
  },
});

// reducer fn
// const counterReducer = (state = initState, action) => {
//   // niedada tiesiogiai nemodifikuojam state
//   // state.counterValue++ // no no
//   // state.showCounter = true // no no
//   console.log('state ===', state);
//   console.log('action ===', action);

//   switch (action.type) {
//     case 'UP':
//       return { ...state, counterValue: state.counterValue + 1 };
//     case 'DOWN':
//       return { ...state, counterValue: state.counterValue - 1 };
//     case 'UP_BY':
//       return { ...state, counterValue: state.counterValue + action.payload };
//     case 'TOGGLE':
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       console.warn(`toks veiksmas nerastas "${action.type}"`);
//       return state;
//   }
// };

// sukuriam pagr reducer kintamaji
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
