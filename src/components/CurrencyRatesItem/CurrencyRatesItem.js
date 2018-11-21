import React from "react";

const CurrencyRatesItem = ({ currency, rate }) => (
  <div>
    {currency}: {rate}
  </div>
);

export default CurrencyRatesItem;
