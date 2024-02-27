import { createStore } from 'redux';

const initState = { counterValue: 0 };

// reducer fn
const counterReducer = (state = initState, action) => {};

// sukuriam pagr reducer kintamaji
const store = createStore(counterReducer);

export default store;
