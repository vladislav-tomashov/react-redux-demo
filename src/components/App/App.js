import React from "react";
import LoadButton from "../LoadButton/LoadButton";
import Spinner from "../Spinner/Spinner";
import CurrencyRatesList from "../CurrencyRatesList/CurrencyRatesList";
import ErrorModal from "../ErrorModal/ErrorModal";

import "./App.scss";

const App = () => (
  <React.Fragment>
    <Spinner />
    <ErrorModal />
    <div className="App">
      <p>
        <LoadButton />
      </p>
      <CurrencyRatesList />
    </div>
  </React.Fragment>
);

export { App as default };
