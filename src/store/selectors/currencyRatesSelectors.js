import { CURRENCY_RATES_REDUCER } from "../reducers/reducerNames";

const getCurrencyRatesState = state => state[CURRENCY_RATES_REDUCER];

const isCurrencyRatesLoading = state => getCurrencyRatesState(state).loading;

const wasCurrencyRatesLoaded = state => !!getCurrencyRatesState(state).rates;

const getNextDate = state => getCurrencyRatesState(state).nextDate;

const getCurrencyRatesData = state => {
  const { rates, date, base, loading, nextDate } = getCurrencyRatesState(state);
  return { rates, date, base, loading, nextDate };
};

export {
  isCurrencyRatesLoading,
  wasCurrencyRatesLoaded,
  getCurrencyRatesData,
  getNextDate
};
