import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import { getCurrencyRatesData } from "../../store/selectors/currencyRatesSelectors";
import CurrencyRatesItem from "../CurrencyRatesItem/CurrencyRatesItem";
import "./CurrencyRatesList.scss";

const CurrencyRatesList = ({ date, base, rates } = {}) => {
  const content = !date ? (
    <span>Please press [Load rates] button to get currency rates</span>
  ) : (
    <React.Fragment>
      <div className="CurrencyRates-heading">Currency rates</div>
      <div className="CurrencyRates-info">
        <span>Currency rates for:</span>
        <span>{moment(date).format("LL")}</span>
      </div>
      <div className="CurrencyRates-info">
        <span>Base currency:</span>
        <span>{base}</span>
      </div>
      <div className="CurrencyRates-header">
        <div>Currency</div>
        <div>Rate</div>
      </div>
      <div className="CurrencyRates-body">
        {Object.entries(rates).map(([currency, rate]) => {
          return <CurrencyRatesItem key={currency} {...{ currency, rate }} />;
        })}
      </div>
    </React.Fragment>
  );
  return <div className="CurrencyRates">{content}</div>;
};

CurrencyRatesList.propTypes = {
  rates: PropTypes.objectOf(PropTypes.number),
  date: PropTypes.instanceOf(Date),
  base: PropTypes.string
};

const mapStateToProps = (state /*, ownProps*/) => {
  return getCurrencyRatesData(state);
};

const ConnectedCurrencyRatesList = connect(mapStateToProps)(CurrencyRatesList);

export { ConnectedCurrencyRatesList as default, CurrencyRatesList };
