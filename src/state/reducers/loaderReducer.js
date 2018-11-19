import {
  RESET_LOADING,
  INCREMENT_LOADING,
  DECREMENT_LOADING
} from "../actions/loader/loaderActionTypes";

const initialState = {
  counter: 0
};

const loaderReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case RESET_LOADING:
      return initialState;
    case INCREMENT_LOADING:
      return { counter: state.counter + 1 };
    case DECREMENT_LOADING:
      const decremented = state.counter - 1;
      const counter = decremented < 0 ? 0 : decremented;
      return { counter };
    default:
      return state;
  }
};

export { loaderReducer as default };
