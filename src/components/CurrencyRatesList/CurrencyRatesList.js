import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import { getCurrencyRatesData } from "../../store/selectors/currencyRatesSelectors";
import CurrencyRatesItem from "../CurrencyRatesItem/CurrencyRatesItem";
import "./CurrencyRatesList.scss";

const CurrencyRatesList = ({ date, base, rates } = {}) => {
  const formattedDate = moment(date).format("LL");
  const ratesBody = rates ? (
    <React.Fragment>
      <div className="CurrencyRates-info">
        <span>Currency rates for:</span>
        <span>{formattedDate}</span>
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
  ) : (
    <span>No rates found for {formattedDate}.</span>
  );
  const content = !date ? (
    <span>Please press [Load rates] button to get currency rates</span>
  ) : (
    <React.Fragment>
      <div className="CurrencyRates-heading">Currency rates</div>
      {ratesBody}
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
