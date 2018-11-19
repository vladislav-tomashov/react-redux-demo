import {
  START_LOADING_CURRENCY_RATES,
  END_LOADING_CURRENCY_RATES,
  SET_CURRENCY_RATES
} from "../actions/currencyRates/currencyRatesActionTypes";

const initialState = {
  updateOn: null,
  rates: null,
  loading: false
};

const currencyRatesReducer = (state = initialState, { type, rates }) => {
  switch (type) {
    case START_LOADING_CURRENCY_RATES:
      return { ...state, loading: true };
    case END_LOADING_CURRENCY_RATES:
      return { ...state, loading: false };
    case SET_CURRENCY_RATES:
      const updateOn = +new Date();
      return { updateOn, rates };
    default:
      return state;
  }
};

export { currencyRatesReducer as default };
