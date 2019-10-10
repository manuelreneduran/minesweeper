import { SET_BOARD, SET_COORDS } from "../constants/index.js";

const initialState = {
  board: [],
  clickedCoord: []
};

export default function rootReducer(state = initialState, action) {
  if (action.type === SET_BOARD) {
    return Object.assign({}, state, {
      board: state.board.concat(action.payload)
    });
  }
  if (action.type === SET_COORDS) {
    return Object.assign({}, state, {
      clickedCoord: state.clickedCoord.concat(action.payload)
    });
  }
  return state;
};