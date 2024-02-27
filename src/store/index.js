import { legacy_createStore as createStore } from 'redux';

const initState = { counterValue: 10, showCounter: true };

// reducer fn
const counterReducer = (state = initState, action) => {
  console.log('state ===', state);
  console.log('action ===', action);

  switch (action.type) {
    case 'UP':
      return { ...state, counterValue: state.counterValue + 1 };
    case 'DOWN':
      return { ...state, counterValue: state.counterValue - 1 };
    case 'UP_BY':
      return { ...state, counterValue: state.counterValue + action.payload };

    default:
      return state;
  }
};

// sukuriam pagr reducer kintamaji
const store = createStore(counterReducer);

export default store;
