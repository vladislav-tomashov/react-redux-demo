import { ERRORS_REDUCER } from "../reducers/reducerNames";

const getErrorState = state => state[ERRORS_REDUCER];

const isErrorShowing = state => getErrorState(state).showing;

const getError = state => getErrorState(state).error;

export { isErrorShowing, getError };
