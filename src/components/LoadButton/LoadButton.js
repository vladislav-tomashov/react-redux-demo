import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadCurrencyRates } from "../../store/actions/currencyRates/currencyRatesActions";
import {
  isCurrencyRatesLoading,
  getCurrencyRates
} from "../../store/selectors/currencyRatesSelectors";

import "./LoadButton.scss";

const LoadButton = props => {
  let label = "Load rates";
  if (props.loading) {
    label = "Loading...";
  } else if (props.loaded) {
    label = "Update rates";
  }
  return (
    // {!props.loaded && <p>Please press [Load rates] button to get currency rates</p>}
    <button
      className="LoadButton"
      disabled={props.loading}
      onClick={props.loadCurrencyRates}
    >
      {label}
    </button>
  );
};

LoadButton.propTypes = {
  loadCurrencyRates: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  loaded: PropTypes.bool
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    loading: isCurrencyRatesLoading(state),
    loaded: !!getCurrencyRates(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadCurrencyRates }, dispatch);

const ConnectedLoadButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadButton);

export { ConnectedLoadButton as default, LoadButton };
