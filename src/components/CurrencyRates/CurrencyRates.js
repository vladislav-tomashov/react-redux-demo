import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrencyRatesInfo } from "../../store/selectors/currencyRatesSelectors";
import CurrencyRatesItem from "../CurrencyRatesItem/CurrencyRatesItem";

import "./CurrencyRates.scss";

class CurrencyRates extends React.PureComponent {
  static propTypes = {
    rates: PropTypes.object,
    date: PropTypes.instanceOf(Date),
    base: PropTypes.string
  };

  render = () => {
    if (!this.props.rates) {
      return <p>Please press [Load rates] button to get currency rates</p>;
    }
    const date = this.props.date.toLocaleDateString();
    return (
      <div className="CurrencyRates">
        <div className="CurrencyRates-heading">Currency rates</div>
        <div className="CurrencyRates-info">Currency rates for: {date}</div>
        <div className="CurrencyRates-info">
          Base currency: {this.props.base}
        </div>
        <div className="CurrencyRates-header">
          <div>Currency</div>
          <div>Rate</div>
        </div>
        <div className="CurrencyRates-body">
          {Object.entries(this.props.rates).map(([currency, rate]) => {
            return <CurrencyRatesItem key={currency} {...{ currency, rate }} />;
          })}
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state /*, ownProps*/) => {
  return getCurrencyRatesInfo(state);
};

const ConnectedCurrencyRates = connect(mapStateToProps)(CurrencyRates);

export { ConnectedCurrencyRates as default, CurrencyRates };
