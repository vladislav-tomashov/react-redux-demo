import React from "react";
import numeral from "numeral";

import "./CurrencyRatesItem.scss";

const CurrencyRatesItem = ({ currency, rate }) => (
  <div className="CurrencyRatesItem">
    <span>{currency}</span>
    <span>{numeral(rate).format("0.0000")}</span>
  </div>
);

export default CurrencyRatesItem;
