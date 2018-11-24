import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../src/store/createStore";
import Modal from "react-modal";
import App from "../src/components/App/App";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

const target = document.querySelector("#root");
Modal.setAppElement(target);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
