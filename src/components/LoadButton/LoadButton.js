import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./LoadButton.css";
import { loadCurrencyRates } from "../../store/actions/currencyRates/currencyRatesActions";
import {
  isCurrencyRatesLoading,
  getCurrencyRates
} from "../../store/selectors/currencyRatesSelectors";

class LoadButton extends Component {
  static propTypes = {
    loadCurrencyRates: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    loaded: PropTypes.bool
  };
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  focus = () => {
    this.ref.current.focus();
  };
  onClick = () => {
    this.props.loadCurrencyRates();
  };
  componentDidMount = () => {
    this.focus();
  };
  render = () => {
    let label = "Load rates";
    if (this.props.loading) {
      label = "Loading...";
    } else if (this.props.loaded) {
      label = "Update rates";
    }
    return (
      <button
        disabled={this.props.loading}
        ref={this.ref}
        onClick={this.onClick}
      >
        {label}
      </button>
    );
  };
}

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
