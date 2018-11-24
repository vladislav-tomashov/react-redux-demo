import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadCurrencyRates } from "../../store/actions/currencyRates/currencyRatesActionCreators";
import {
  isCurrencyRatesLoading,
  wasCurrencyRatesLoaded
} from "../../store/selectors/currencyRatesSelectors";
import "./LoadButton.scss";

const LoadButton = ({
  loading = false,
  loaded = false,
  loadCurrencyRates = () => {}
} = {}) => {
  let label = "Load rates";
  if (loading) {
    label = "Loading...";
  } else if (loaded) {
    label = "Update rates";
  }
  return (
    <button
      className="LoadButton"
      disabled={loading}
      onClick={loadCurrencyRates}
    >
      {label}
    </button>
  );
};

LoadButton.propTypes = {
  loadCurrencyRates: PropTypes.func,
  loading: PropTypes.bool,
  loaded: PropTypes.bool
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    loading: isCurrencyRatesLoading(state),
    loaded: wasCurrencyRatesLoaded(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadCurrencyRates }, dispatch);

const ConnectedLoadButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadButton);

export { ConnectedLoadButton as default, LoadButton };
