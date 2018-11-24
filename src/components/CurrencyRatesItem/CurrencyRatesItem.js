import React from "react";
import numeral from "numeral";

import "./CurrencyRatesItem.scss";

const getFormattedRate = rate => {
  if (isNaN(parseFloat(rate)) || !isFinite(rate)) {
    return String(rate);
  }
  return numeral(rate).format("0.0000");
};

const CurrencyRatesItem = ({ currency, rate }) => (
  <div className="CurrencyRatesItem">
    <span>{currency}</span>
    <span>{getFormattedRate(rate)}</span>
  </div>
);

export default CurrencyRatesItem;
