import {
  START_LOADING_CURRENCY_RATES,
  SET_CURRENCY_RATES_ERROR,
  SET_CURRENCY_RATES
} from "../actions/currencyRates/currencyRatesActionTypes";
import moment from "moment";

const initialState = {
  nextDate: null,
  rates: null,
  base: null,
  date: null,
  loading: false,
  error: null
};

const getNextBusinessDay = date => {
  let days = 1;
  const momentDate = (date ? moment(date) : moment()).startOf("day");
  const diff = 7 - momentDate.weekday();
  if (diff < 3) {
    days = diff + 1;
  }
  const result = momentDate.add(days, "days");
  if (result.isAfter(moment(), "day")) {
    return null;
  }
  return result.toDate();
};

const currencyRatesReducer = (
  state = initialState,
  { type, rates, base, date, error }
) => {
  switch (type) {
    case START_LOADING_CURRENCY_RATES:
      return { ...state, loading: true };
    case SET_CURRENCY_RATES_ERROR:
      return {
        ...state,
        loading: false,
        error
      };
    case SET_CURRENCY_RATES:
      return {
        nextDate: getNextBusinessDay(date),
        base,
        date,
        rates,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export { currencyRatesReducer as default };
