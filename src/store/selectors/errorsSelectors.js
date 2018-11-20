import { ERRORS_REDUCER } from "../reducers/reducerNames";

const getErrorState = state => state[ERRORS_REDUCER];

const isShowingError = state => getErrorState(state).showing;

const getError = state => getErrorState(state).error;

export { isShowingError, getError };
