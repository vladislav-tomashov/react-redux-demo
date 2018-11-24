import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadCurrencyRates } from "../../store/actions/currencyRates/currencyRatesActionCreators";
import {
  isCurrencyRatesLoading,
  wasCurrencyRatesLoaded
} from "../../store/selectors/currencyRatesSelectors";
import { LOADING, LOADED, NOTDONE } from "./requestStatuses";
import "./LoadButton.scss";

const LoadButton = ({ requestStatus, makeRequest }) => {
  const loading = requestStatus === LOADING;
  const loaded = requestStatus === LOADED;
  let label = "Load rates";
  if (loading) {
    label = "Loading...";
  } else if (loaded) {
    label = "Update rates";
  }
  return (
    <button className="LoadButton" disabled={loading} onClick={makeRequest}>
      {label}
    </button>
  );
};

LoadButton.propTypes = {
  makeRequest: PropTypes.func.isRequired,
  requestStatus: PropTypes.oneOf([LOADING, LOADED, NOTDONE])
};

const mapStateToProps = (state /*, ownProps*/) => {
  let requestStatus;
  if (isCurrencyRatesLoading(state)) {
    requestStatus = LOADING;
  } else if (wasCurrencyRatesLoaded(state)) {
    requestStatus = LOADED;
  }
  return {
    requestStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeRequest: () => dispatch(loadCurrencyRates())
  };
};

const ConnectedLoadButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadButton);

export { ConnectedLoadButton as default, LoadButton };
