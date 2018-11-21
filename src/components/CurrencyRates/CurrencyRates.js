import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrencyRatesInfo } from "../../store/selectors/currencyRatesSelectors";
import CurrencyRatesItem from "../CurrencyRatesItem/CurrencyRatesItem";
import "./CurrencyRates.css";

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
      <React.Fragment>
        <h3>Currency rates</h3>
        <div>Currency rates on: {date}</div>
        <div>Base currency: {this.props.base}</div>
        <div>
          {Object.entries(this.props.rates).map(([currency, rate]) => {
            return <CurrencyRatesItem key={currency} {...{ currency, rate }} />;
          })}
        </div>
      </React.Fragment>
    );
  };
}

const mapStateToProps = (state /*, ownProps*/) => {
  return getCurrencyRatesInfo(state);
};

const ConnectedCurrencyRates = connect(mapStateToProps)(CurrencyRates);

export { ConnectedCurrencyRates as default, CurrencyRates };
