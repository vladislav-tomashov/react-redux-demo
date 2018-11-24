import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../src/store/createStore";
import App from "../src/components/App/App";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
