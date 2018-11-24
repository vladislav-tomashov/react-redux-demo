import React from "react";
import Modal from "react-modal";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { hideError } from "../../store/actions/errors/errorsActionCreators";
import {
  isErrorShowing,
  getError
} from "../../store/selectors/errorsSelectors";
import "./ErrorModal.scss";

const ErrorModal = ({
  isErrorShowing = false,
  hideError = () => {},
  error = null
} = {}) => (
  <Modal
    isOpen={isErrorShowing}
    ariaHideApp={false}
    className="ErrorModal-modal"
    overlayClassName="ErrorModal-overlay"
    onRequestClose={hideError}
    contentLabel="Error Modal"
  >
    <div className="ErrorModal-title">Error</div>
    {error && <p className="ErrorModal-text">{error.toString()}</p>}
    <button className="ErrorModal-button" onClick={hideError}>
      Ok
    </button>
  </Modal>
);

ErrorModal.propTypes = {
  isErrorShowing: PropTypes.bool,
  error: PropTypes.any,
  hideError: PropTypes.func
};

const mapStateToProps = state => {
  return {
    isErrorShowing: isErrorShowing(state),
    error: getError(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ hideError }, dispatch);

const ConnectedErrorModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModal);

export { ConnectedErrorModal as default, ErrorModal };
