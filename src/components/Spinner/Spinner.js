import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isCurrencyRatesLoading } from "../../store/selectors/currencyRatesSelectors";
import { ReactComponent as Logo } from "./logo.svg";
import "./Spinner.scss";

const Spinner = ({ loading = false } = {}) => {
  if (!loading) {
    return null;
  }
  return (
    <div className="Spinner">
      <Logo className="Spinner-image" />
    </div>
  );
};

Spinner.propTypes = {
  loading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    loading: isCurrencyRatesLoading(state)
  };
};

const ConnectedSpinner = connect(mapStateToProps)(Spinner);

export { ConnectedSpinner as default, Spinner };
