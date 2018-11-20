import {
  RESET_ERROR,
  SET_ERROR,
  SHOW_ERROR,
  HIDE_ERROR
} from "../actions/errors/errorsActionTypes";

const initialState = {
  error: null,
  showing: false
};

const errorsReducer = (state = initialState, { type, error }) => {
  switch (type) {
    case RESET_ERROR:
      return initialState;
    case SET_ERROR:
      return { error, showing: true };
    case SHOW_ERROR:
      if (state.showing || !state.error) {
        return state;
      }
      return { ...state, showing: true };
    case HIDE_ERROR:
      return { ...state, showing: false };
    default:
      return state;
  }
};

export { errorsReducer as default };
