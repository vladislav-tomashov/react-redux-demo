import moment from "moment";
import {
  SET_CURRENCY_RATES,
  SET_CURRENCY_RATES_LOADING_ERROR,
  START_LOADING_CURRENCY_RATES
} from "./currencyRatesActionTypes";
import { isCurrencyRatesLoading } from "../../selectors/currencyRatesSelectors";

const setCurrencyRates = ({ rates, date, base }) => {
  const momentDate = moment.utc(date, "YYYY-MM-DD", true);
  if (!momentDate.isValid()) {
    throw new Error(`Conversion error: cannot convert '${date}' to Date`);
  }
  Object.values(rates).forEach(rate => {
    if (typeof rate !== "number") {
      throw new Error(`Conversion error: rate is not a number ${rate}`);
    }
  });
  return {
    type: SET_CURRENCY_RATES,
    rates,
    date: momentDate.toDate(),
    base
  };
};

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
