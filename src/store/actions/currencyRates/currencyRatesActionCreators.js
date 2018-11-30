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
  if (rates) {
    Object.values(rates).forEach(rate => {
      if (typeof rate !== "number") {
        throw new Error(`Conversion error: rate "${rate}" is not a number`);
      }
    });
  }
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

const loadRates = ({ getInput, transformOutput }) => {
  return async (dispatch, getState) => {
    if (isCurrencyRatesLoading(getState())) {
      return;
    }
    const input = getInput(getState());
    const { date: inputDate } = input;
    if (!inputDate) {
      return;
    }
    const dateStr = moment(inputDate).format("YYYY-MM-DD");
    const url = FETCH_URL + dateStr;
    try {
      dispatch(startLoadingCurrencyRates());
      const response = await fetch(url);
      const output = await response.json();
      const { date, base, rates } = transformOutput({ input, output });
      dispatch(setCurrencyRates({ date, base, rates }));
    } catch (error) {
      dispatch(setCurrencyRatesLoadingError(error));
    }
  };
};

const getInputDateForPrevDay = state => {
  const { date } = getCurrencyRatesData(state);
  if (!date) {
    return null;
  }
  return moment(date).add(-1, "days");
};

const getInputForPrevDay = state => ({
  date: getInputDateForPrevDay(state)
});

const transformOutputForPrevDay = ({ output: { rates, date, base } }) => {
  return {
    date,
    rates,
    base
  };
};

const loadForPreviousDay = () => {
  return loadRates({
    getInput: getInputForPrevDay,
    transformOutput: transformOutputForPrevDay
  });
};

const getInputDateForNextDay = state => {
  const date = getNextDate(state);
  return date ? date : null;
};

const getInputForNextDay = state => ({
  date: getInputDateForNextDay(state)
});

const transformOutputForNextDay = ({
  input: { date },
  output: { rates: outputRates, date: outputDate, base }
}) => {
  const rates = moment(date).isAfter(outputDate, "day") ? null : outputRates;
  return {
    date,
    rates,
    base
  };
};

const loadForNextDay = () => {
  return loadRates({
    getInput: getInputForNextDay,
    transformOutput: transformOutputForNextDay
  });
};

const getInputDateForCurrentDay = state => {
  const { date } = getCurrencyRatesData(state);
  return date ? moment(date) : moment();
};

const getInputForCurrentDay = state => ({
  date: getInputDateForCurrentDay(state)
});

const loadCurrencyRates = () => {
  return loadRates({
    getInput: getInputForCurrentDay,
    transformOutput: transformOutputForNextDay
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
