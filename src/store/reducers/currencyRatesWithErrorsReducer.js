import errorsReducer from "./errorsReducer";
import currencyRatesReducer from "./currencyRatesReducer";
import {
  SET_CURRENCY_RATES_LOADING_ERROR,
  SET_CURRENCY_RATES
} from "../actions/currencyRates/currencyRatesActions";
import { RESET_ERROR, SET_ERROR } from "../actions/errors/errorsActions";
import { ERRORS_REDUCER, CURRENCY_RATES_REDUCER } from "./reducerNames";

const currencyRatesWithErrorsReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENCY_RATES_LOADING_ERROR:
      return {
        [CURRENCY_RATES_REDUCER]: currencyRatesReducer(
          state.currencyRates,
          action
        ),
        [ERRORS_REDUCER]: errorsReducer(state.errors, {
          ...action,
          type: SET_ERROR
        })
      };
    case SET_CURRENCY_RATES:
      return {
        [CURRENCY_RATES_REDUCER]: currencyRatesReducer(
          state.currencyRates,
          action
        ),
        [ERRORS_REDUCER]: errorsReducer(state.errors, { type: RESET_ERROR })
      };
    default:
      return state;
  }
};

export { currencyRatesWithErrorsReducer as default };
