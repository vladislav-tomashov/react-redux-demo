import {
  START_LOADING_CURRENCY_RATES,
  SET_CURRENCY_RATES_LOADING_ERROR,
  SET_CURRENCY_RATES
} from "../actions/currencyRates/currencyRatesActionTypes";

const initialState = {
  updateOn: null,
  rates: null,
  loading: false,
  error: null
};

const currencyRatesReducer = (state = initialState, { type, rates, error }) => {
  switch (type) {
    case START_LOADING_CURRENCY_RATES:
      return { ...state, loading: true };
    case SET_CURRENCY_RATES_LOADING_ERROR:
      return {
        ...state,
        loading: false,
        error
      };
    case SET_CURRENCY_RATES:
      return {
        updateOn: +new Date(),
        rates,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export { currencyRatesReducer as default };
