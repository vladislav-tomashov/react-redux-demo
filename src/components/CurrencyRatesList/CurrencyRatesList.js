import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrencyRatesInfo } from "../../store/selectors/currencyRatesSelectors";
import CurrencyRatesItem from "../CurrencyRatesItem/CurrencyRatesItem";

import "./CurrencyRatesList.scss";

const CurrencyRatesList = props => {
  const content = !props.date ? (
    <span>Please press [Load rates] button to get currency rates</span>
  ) : (
    <React.Fragment>
      <div className="CurrencyRates-heading">Currency rates</div>
      <div className="CurrencyRates-info">
        <span>Currency rates for:</span>
        <span>{props.date.toLocaleDateString()}</span>
      </div>
      <div className="CurrencyRates-info">
        <span>Base currency:</span>
        <span>{props.base}</span>
      </div>
      <div className="CurrencyRates-header">
        <div>Currency</div>
        <div>Rate</div>
      </div>
      <div className="CurrencyRates-body">
        {Object.entries(props.rates).map(([currency, rate]) => {
          return <CurrencyRatesItem key={currency} {...{ currency, rate }} />;
        })}
      </div>
    </React.Fragment>
  );
  return <div className="CurrencyRates">{content}</div>;
};

CurrencyRatesList.propTypes = {
  rates: PropTypes.object,
  date: PropTypes.instanceOf(Date),
  base: PropTypes.string
};

const mapStateToProps = (state /*, ownProps*/) => {
  return getCurrencyRatesInfo(state);
};

const ConnectedCurrencyRatesList = connect(mapStateToProps)(CurrencyRatesList);

export { ConnectedCurrencyRatesList as default, CurrencyRatesList };
