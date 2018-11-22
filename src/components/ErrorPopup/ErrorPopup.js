import React from "react";
import Modal from "react-modal";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { hideError } from "../../store/actions/errors/errorsActions";
import {
  isShowingError,
  getError
} from "../../store/selectors/errorsSelectors";
import "./ErrorPopup.scss";

const ErrorPopup = props => (
  <Modal
    isOpen={props.isShowingError}
    ariaHideApp={false}
    className="Modal"
    overlayClassName="Overlay"
  >
    <h3>Error</h3>
    {props.error && <p>{props.error.toString()}</p>}
    <button className="Modal-button" onClick={props.hideError}>
      Ok
    </button>
  </Modal>
);

ErrorPopup.propTypes = {
  isShowingError: PropTypes.bool.isRequired,
  error: PropTypes.any,
  hideError: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isShowingError: isShowingError(state),
    error: getError(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ hideError }, dispatch);

const ConnectedErrorPopup = connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorPopup);

export { ConnectedErrorPopup as default, ErrorPopup };
