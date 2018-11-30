import moment from "moment";
import {
  SET_CURRENCY_RATES,
  SET_CURRENCY_RATES_ERROR,
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

const setCurrencyRatesError = error => ({
  type: SET_CURRENCY_RATES_ERROR,
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
      dispatch(setCurrencyRates(transformOutput({ input, output })));
    } catch (error) {
      dispatch(setCurrencyRatesError(error));
    }
  };
};

const getInputDateForYesterday = state => {
  const { date } = getCurrencyRatesData(state);
  if (!date) {
    return null;
  }
  return moment(date)
    .add(-1, "days")
    .startOf("day");
};

const getInputForYesterday = state => ({
  date: getInputDateForYesterday(state)
});

const transformOutputForYesterday = ({ output: { rates, date, base } }) => {
  return {
    date,
    rates,
    base
  };
};

const loadForYesterday = () => {
  return loadRates({
    getInput: getInputForYesterday,
    transformOutput: transformOutputForYesterday
  });
};

const getInputDateForTomorrow = state => {
  const date = getNextDate(state);
  return date ? date : null;
};

const getInputForTomorrow = state => ({
  date: getInputDateForTomorrow(state)
});

const transformOutputForTomorrow = ({
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

const loadForTomorrow = () => {
  return loadRates({
    getInput: getInputForTomorrow,
    transformOutput: transformOutputForTomorrow
  });
};

const getInputDateForToday = state => {
  const { date } = getCurrencyRatesData(state);
  return (date ? moment(date) : moment()).startOf("day");
};

const getInputForToday = state => ({
  date: getInputDateForToday(state)
});

const loadForToday = () => {
  return loadRates({
    getInput: getInputForToday,
    transformOutput: transformOutputForYesterday
  });
};

export {
  setCurrencyRates,
  startLoadingCurrencyRates,
  setCurrencyRatesError,
  loadForToday,
  loadForTomorrow,
  loadForYesterday
};
