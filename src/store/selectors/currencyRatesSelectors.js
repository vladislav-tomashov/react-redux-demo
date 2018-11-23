import { CURRENCY_RATES_REDUCER } from "../reducers/reducerNames";

const getCurrencyRatesState = state => state[CURRENCY_RATES_REDUCER];

const isCurrencyRatesLoading = state => getCurrencyRatesState(state).loading;

const wasCurrencyRatesLoaded = state => !!getCurrencyRatesState(state).rates;

const getCurrencyRatesData = state => {
  const { rates, date, base } = getCurrencyRatesState(state);
  return { rates, date, base };
};

export { isCurrencyRatesLoading, wasCurrencyRatesLoaded, getCurrencyRatesData };
