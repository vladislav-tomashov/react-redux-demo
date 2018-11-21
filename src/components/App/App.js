import React from "react";
// import logo from "../../logo.svg";
import LoadButton from "../LoadButton/LoadButton";
import Spinner from "../Spinner/Spinner";
import CurrencyRates from "../CurrencyRates/CurrencyRates";

import "./App.css";

const App = () => (
  <React.Fragment>
    <Spinner />
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <LoadButton />
        </p>
        <CurrencyRates />
      </header>
    </div>
  </React.Fragment>
);

export { App as default };
