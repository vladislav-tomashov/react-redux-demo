import errorsReducer from "./errorsReducer";
import currencyRatesReducer from "./currencyRatesReducer";
import {
  SET_CURRENCY_RATES_LOADING_ERROR,
  SET_CURRENCY_RATES
} from "../actions/currencyRates/currencyRatesActionTypes";
import { RESET_ERROR, SET_ERROR } from "../actions/errors/errorsActionTypes";
import { ERRORS_REDUCER, CURRENCY_RATES_REDUCER } from "./reducerNames";

const currencyRatesWithErrorsReducer = (state, { type, rates, error }) => {
  switch (type) {
    case SET_CURRENCY_RATES_LOADING_ERROR:
      return {
        [CURRENCY_RATES_REDUCER]: currencyRatesReducer(state.currencyRates, {
          type,
          error
        }),
        [ERRORS_REDUCER]: errorsReducer(state.errors, {
          type: SET_ERROR,
          error
        })
      };
    case SET_CURRENCY_RATES:
      return {
        [CURRENCY_RATES_REDUCER]: currencyRatesReducer(state.currencyRates, {
          type,
          rates
        }),
        [ERRORS_REDUCER]: errorsReducer(state.errors, { type: RESET_ERROR })
      };
    default:
      return state;
  }
};

export { currencyRatesWithErrorsReducer as default };
