import { legacy_createStore as createStore } from 'redux';

const initState = { counterValue: 10 };

// reducer fn
const counterReducer = (state = initState, action) => {
  return state;
};

// sukuriam pagr reducer kintamaji
const store = createStore(counterReducer);

export default store;
