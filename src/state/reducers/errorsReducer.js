import {
  RESET_ERROR,
  SET_ERROR,
  SHOW_ERROR,
  HIDE_ERROR
} from "../actions/errors/errorsActionTypes";

const initialState = {
  error: null,
  occuredOn: null,
  showing: false
};

const errorsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case RESET_ERROR:
      return initialState;
    case SET_ERROR:
      const { error } = action;
      const occuredOn = +new Date();
      return { ...state, error, occuredOn };
    case SHOW_ERROR:
      return { ...state, showing: true };
    case HIDE_ERROR:
      return { ...state, showing: false };
    default:
      return state;
  }
};

export { errorsReducer as default };
