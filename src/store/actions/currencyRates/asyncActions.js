import { setError } from "../errors/actions";
import {
  setCurrencyRates,
  startLoadingCurrencyRates,
  endLoadingCurrencyRates
} from "./actions";

const FETCH_URL =
  process.env.REACT_APP_CURRENCY_RATES_URL || "www.abcdef.com/rates";

const loadCurrencyRates = () => {
  return async (dispatch, getState) => {
    const { loading } = getState().currencyRates;
    if (loading) {
      return;
    }
    dispatch(startLoadingCurrencyRates());
    try {
      const rates = await fetch(FETCH_URL);
      dispatch(setCurrencyRates(rates));
    } catch (error) {
      dispatch(endLoadingCurrencyRates());
      dispatch(setError(error));
    }
  };
};

export { loadCurrencyRates as default };
