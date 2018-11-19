import { RESET_ERROR, SET_ERROR, SHOW_ERROR, HIDE_ERROR } from "./actionTypes";

const resetError = () => ({
  type: RESET_ERROR
});

const setError = error => ({
  type: SET_ERROR,
  error
});

const showError = () => ({
  type: SHOW_ERROR
});

const hideError = () => ({
  type: HIDE_ERROR
});

export { resetError, setError, showError, hideError };
