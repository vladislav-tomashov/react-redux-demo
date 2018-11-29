import moment from "moment";
import {
  SET_CURRENCY_RATES,
  SET_CURRENCY_RATES_LOADING_ERROR,
  START_LOADING_CURRENCY_RATES
} from "./currencyRatesActionTypes";
import {
  isCurrencyRatesLoading,
  getNextDate,
  getCurrencyRatesData
} from "../../selectors/currencyRatesSelectors";

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
  "https://api.exchangeratesapi.io/";

const loadRates = getDateFromState => {
  return async (dispatch, getState) => {
    if (isCurrencyRatesLoading(getState())) {
      return;
    }
    const inputDate = getDateFromState(getState());
    if (!inputDate) {
      return;
    }
    const dateStr = moment(inputDate).format("YYYY-MM-DD");
    const url = FETCH_URL + dateStr;
    try {
      dispatch(startLoadingCurrencyRates());
      const response = await fetch(url);
      const { date, base, rates } = await response.json();
      dispatch(setCurrencyRates({ date, base, rates }));
    } catch (error) {
      dispatch(setCurrencyRatesLoadingError(error));
    }
  };
};

const loadForPreviousDay = () => {
  return loadRates(state => {
    const { date } = getCurrencyRatesData(state);
    if (!date) {
      return null;
    }
    return moment(date).add(-1, "days");
  });
};

const loadForNextDay = () => {
  return loadRates(state => {
    const date = getNextDate(state);
    if (!date) {
      return null;
    }
    return date;
  });
};

const loadCurrencyRates = () => {
  return loadRates(state => {
    const { date } = getCurrencyRatesData(state);
    return date ? moment(date) : moment();
  });
};

export {
  setCurrencyRates,
  startLoadingCurrencyRates,
  setCurrencyRatesLoadingError,
  loadCurrencyRates,
  loadForNextDay,
  loadForPreviousDay
};
