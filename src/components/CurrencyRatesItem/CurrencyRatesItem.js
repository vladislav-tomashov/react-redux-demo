import React from "react";
import numeral from "numeral";
import PropTypes from "prop-types";
import "./CurrencyRatesItem.scss";

const CurrencyRatesItem = ({ currency, rate }) => (
  <div className="CurrencyRatesItem">
    <span>{currency}</span>
    <span>{numeral(rate).format("0.0000")}</span>
  </div>
);

CurrencyRatesItem.propTypes = {
  currency: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired
};

export default CurrencyRatesItem;
