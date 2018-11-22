import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  isShowingError,
  getError
} from "../../store/selectors/errorsSelectors";
import "./ErrorPopup.scss";

const ErrorPopup = props => (
  <Modal
    isOpen={props.isShowingError}
    // isOpen={true}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Error"
  >
    <h3>Error happened</h3>
    <p>{props.error}</p>
    <button>OK</button>
  </Modal>
);

ErrorPopup.propTypes = {
  isShowingError: PropTypes.bool.isRequired,
  error: PropTypes.any
};

const mapStateToProps = state => {
  return {
    isShowingError: isShowingError(state),
    error: getError(state)
  };
};

const ConnectedErrorPopup = connect(mapStateToProps)(ErrorPopup);

export { ConnectedErrorPopup as default, ErrorPopup };
