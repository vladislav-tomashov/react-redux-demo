import {
  SET_CURRENCY_RATES,
  LOAD_CURRENCY_RATES
} from "./currencyRatesActionTypes";

const setCurrencyRates = rates => ({
  type: SET_CURRENCY_RATES,
  rates
});

const loadCurrencyRates = () => ({
  type: LOAD_CURRENCY_RATES
});

export { setCurrencyRates, loadCurrencyRates };
