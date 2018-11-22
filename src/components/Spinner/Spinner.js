import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isCurrencyRatesLoading } from "../../store/selectors/currencyRatesSelectors";
import spinner from "../../logo.svg";
import "./Spinner.scss";

const Spinner = ({ loading }) => {
  if (!loading) {
    return null;
  }
  return (
    <div className="Spinner">
      <img src={spinner} className="Spinner-image" alt="Loading..." />
    </div>
  );
};

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    loading: isCurrencyRatesLoading(state)
  };
};

const ConnectedSpinner = connect(mapStateToProps)(Spinner);

export { ConnectedSpinner as default, Spinner };
