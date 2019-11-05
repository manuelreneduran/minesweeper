import { SET_BOARD, SET_COORDS } from "../constants/index.js";

export function setBoard(payload) {
  return { type: SET_BOARD, payload }
};

export function setCoords(payload) {
  return { type: SET_COORDS, payload }
}