import { CURRENCY_RATES_REDUCER } from "../reducers/reducerNames";

const getCurrencyRatesState = state => state[CURRENCY_RATES_REDUCER];

const isCurrencyRatesLoading = state => getCurrencyRatesState(state).loading;

const getCurrencyRates = state => getCurrencyRatesState(state).rates;

export { isCurrencyRatesLoading, getCurrencyRates };
