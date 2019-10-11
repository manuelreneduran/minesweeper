import { SET_BOARD, SET_COORDS } from "../constants/index.js";

const initialState = {
  board: [],
  clickedCoord: []
};

export default function rootReducer(state = initialState, action) {

  if (action.type === SET_BOARD) {
    return {...state,
      board: action.payload };
  }
  if (action.type === SET_COORDS) {
    return Object.assign({}, state, {
      clickedCoord: action.payload
    });
  }
  return state;
};