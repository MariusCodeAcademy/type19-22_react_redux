import { legacy_createStore as createStore } from 'redux';

const initState = { counterValue: 10 };

// reducer fn
const counterReducer = (state = initState, action) => {
  console.log('state ===', state);
  console.log('action ===', action);

  if (action.type === 'UP') {
    return { counterValue: state.counterValue + 1 };
  } else if (action.type === 'DOWN') {
    return { counterValue: state.counterValue - 1 };
  }

  return state;
};

// sukuriam pagr reducer kintamaji
const store = createStore(counterReducer);

export default store;
