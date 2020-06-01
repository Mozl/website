import { INCREMENT, DECREMENT, RESET } from './types';

export function increment() {
  return function (dispatch) {
    console.log('Increment action dispatched');
    dispatch({ type: INCREMENT });
  };
}

export function decrement() {
  return function (dispatch) {
    console.log('Decrement action dispatched');
    dispatch({ type: DECREMENT });
  };
}

export function reset() {
  return function (dispatch) {
    console.log('Reset action dispatched');
    dispatch({ type: RESET });
  };
}
