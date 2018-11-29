import React from "react";
import Paging from "../Paging/Paging";
import Spinner from "../Spinner/Spinner";
import CurrencyRatesList from "../CurrencyRatesList/CurrencyRatesList";
import ErrorModal from "../ErrorModal/ErrorModal";
import "normalize.css/normalize.css";
import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <Spinner />
      <ErrorModal />
      <div className="App">
        <p>
          <Paging />
        </p>
        <CurrencyRatesList />
      </div>
    </React.Fragment>
  );
};

export { App as default };
