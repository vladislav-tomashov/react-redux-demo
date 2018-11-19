import {
  SET_CURRENCY_RATES,
  END_LOADING_CURRENCY_RATES,
  START_LOADING_CURRENCY_RATES
} from "./actionTypes";

const setCurrencyRates = rates => ({
  type: SET_CURRENCY_RATES,
  rates
});

const startLoadingCurrencyRates = () => ({
  type: START_LOADING_CURRENCY_RATES
});

const endLoadingCurrencyRates = () => ({
  type: END_LOADING_CURRENCY_RATES
});

export { setCurrencyRates, startLoadingCurrencyRates, endLoadingCurrencyRates };
