import React from "react";
import LoadButton from "../LoadButton/LoadButton";
import Spinner from "../Spinner/Spinner";
import CurrencyRatesList from "../CurrencyRatesList/CurrencyRatesList";
import ErrorPopup from "../ErrorPopup/ErrorPopup";

import "./App.scss";

const App = () => (
  <React.Fragment>
    <Spinner />
    <ErrorPopup />
    <div className="App">
      <p>
        <LoadButton />
      </p>
      <CurrencyRatesList />
    </div>
  </React.Fragment>
);

export { App as default };
