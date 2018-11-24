import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { hideError } from "../../store/actions/errors/errorsActionCreators";
import {
  isErrorShowing,
  getError
} from "../../store/selectors/errorsSelectors";
import "./ErrorModal.scss";

const ErrorModal = ({
  isOpen = false,
  onCloseModal = () => {},
  error = null
} = {}) => (
  <Modal
    isOpen={isOpen}
    className="ErrorModal-modal"
    overlayClassName="ErrorModal-overlay"
    onRequestClose={onCloseModal}
    contentLabel="Error Modal"
  >
    <div className="ErrorModal-title">Error</div>
    {error && <p className="ErrorModal-text">{error.toString()}</p>}
    <button className="ErrorModal-button" onClick={onCloseModal}>
      Ok
    </button>
  </Modal>
);

ErrorModal.propTypes = {
  isOpen: PropTypes.bool,
  error: PropTypes.any,
  onCloseModal: PropTypes.func
};

const mapStateToProps = state => {
  return {
    isOpen: isErrorShowing(state),
    error: getError(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: () => dispatch(hideError())
  };
};

const ConnectedErrorModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModal);

export { ConnectedErrorModal as default, ErrorModal };
