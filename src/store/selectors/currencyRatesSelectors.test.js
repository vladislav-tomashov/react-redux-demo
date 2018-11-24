import {
  isCurrencyRatesLoading,
  wasCurrencyRatesLoaded,
  getCurrencyRatesData
} from "./currencyRatesSelectors";

import { CURRENCY_RATES_REDUCER } from "../reducers/reducerNames";

describe("currency rates selectors", () => {
  test("should return (true) if currency rates are loading", () => {
    const loading = true;
    const state = {
      [CURRENCY_RATES_REDUCER]: {
        loading
      }
    };
    expect(isCurrencyRatesLoading(state)).toEqual(loading);
  });
  test("should return (false) if currency rates are loading", () => {
    const loading = false;
    const state = {
      [CURRENCY_RATES_REDUCER]: {
        loading
      }
    };
    expect(isCurrencyRatesLoading(state)).toEqual(loading);
  });
  test("should return (true) if currency rates was loaded", () => {
    const state = {
      [CURRENCY_RATES_REDUCER]: {
        rates: { USD: 123 },
        base: "ABC",
        date: "2018-07-30",
        loading: false
      }
    };
    expect(wasCurrencyRatesLoaded(state)).toBeTruthy();
  });
  test("should return (false) if currency rates was not loaded", () => {
    const state = {
      [CURRENCY_RATES_REDUCER]: {
        loading: true
      }
    };
    expect(wasCurrencyRatesLoaded(state)).toBeFalsy();
  });
  test("should return currency rates data", () => {
    const ratesData = {
      rates: { USD: 123 },
      base: "ABC",
      date: "2018-07-30"
    };
    const state = {
      [CURRENCY_RATES_REDUCER]: {
        ...ratesData,
        loading: false
      }
    };
    expect(getCurrencyRatesData(state)).toEqual(ratesData);
  });
});
