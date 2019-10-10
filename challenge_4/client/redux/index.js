import store from "./store/index.js";
import { setBoard, setCoords } from "./actions/index.js";

window.store = store;
window.setBoard = setBoard;
window.setCoords = setCoords;