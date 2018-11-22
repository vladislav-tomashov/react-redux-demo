import {
  SET_CURRENCY_RATES,
  SET_CURRENCY_RATES_LOADING_ERROR,
  START_LOADING_CURRENCY_RATES
} from "./currencyRatesActionTypes";
import { isCurrencyRatesLoading } from "../../selectors/currencyRatesSelectors";

const setCurrencyRates = ({ rates, date, base }) => ({
  type: SET_CURRENCY_RATES,
  rates,
  date,
  base
});

const startLoadingCurrencyRates = () => ({
  type: START_LOADING_CURRENCY_RATES
});

const setCurrencyRatesLoadingError = error => ({
  type: SET_CURRENCY_RATES_LOADING_ERROR,
  error
});

const FETCH_URL =
  process.env.REACT_APP_CURRENCY_RATES_URL ||
  "https://api.exchangeratesapi.io/latest";

const loadCurrencyRates = () => {
  return async (dispatch, getState) => {
    if (isCurrencyRatesLoading(getState())) {
      return;
    }
    dispatch(startLoadingCurrencyRates());
    try {
      throw new Error(
        "Just test error Just test error Just test error Just test error Just test error Just test error Just test error Just test error Just test error Just test error Just test error Just test error "
      );
      const response = await fetch(FETCH_URL);
      const { date, base, rates } = await response.json();
      dispatch(setCurrencyRates({ date, base, rates }));
    } catch (error) {
      dispatch(setCurrencyRatesLoadingError(error));
    }
  };
};

export {
  setCurrencyRates,
  startLoadingCurrencyRates,
  setCurrencyRatesLoadingError,
  loadCurrencyRates
};
