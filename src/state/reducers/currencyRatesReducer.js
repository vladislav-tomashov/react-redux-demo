import {
  LOAD_CURRENCY_RATES,
  SET_CURRENCY_RATES
} from "../actions/currencyRates/currencyRatesActionTypes";

const initialState = {
  updateOn: null,
  rates: null,
  loading: false
};

const currencyRatesReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_CURRENCY_RATES:
      return { ...state, loading: true };
    case SET_CURRENCY_RATES:
      const updateOn = +new Date();
      const { rates } = action;
      return { updateOn, rates, loading: false };
    default:
      return state;
  }
};

export { currencyRatesReducer as default };
