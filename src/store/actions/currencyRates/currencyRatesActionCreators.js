import {
  SET_CURRENCY_RATES,
  END_LOADING_CURRENCY_RATES,
  START_LOADING_CURRENCY_RATES
} from "./currencyRatesActionTypes";
import { setError } from "../errors/errorsActionCreators";

const FETCH_URL =
  process.env.REACT_APP_CURRENCY_RATES_URL || "www.abcdef.com/rates";

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

const loadCurrencyRates = () => {
  return async (dispatch, getState) => {
    const { loading } = getState();
    if (loading) {
      return;
    }
    dispatch(startLoadingCurrencyRates());
    try {
      const rates = await fetch(FETCH_URL);
      dispatch(setCurrencyRates(rates));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(endLoadingCurrencyRates());
    }
  };
};

export {
  setCurrencyRates,
  loadCurrencyRates,
  startLoadingCurrencyRates,
  endLoadingCurrencyRates
};
