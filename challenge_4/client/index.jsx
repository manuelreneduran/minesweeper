import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import App from "./app.jsx";
import {setBoard, setCoords} from './redux/actions/index.js'


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

window.store = store;
window.setBoard = setBoard;
window.setCoords = setCoords;