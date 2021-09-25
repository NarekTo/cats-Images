import * as types from '../constants/actionTypes';


export default function cats(state = [], action) {
  switch (action.type) {
    case types.GET_CATS:
      return [...action.payload];
    default:
      return [...state];
  }
}
