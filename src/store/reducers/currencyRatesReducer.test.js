import {
  START_LOADING_CURRENCY_RATES,
  SET_CURRENCY_RATES_LOADING_ERROR,
  SET_CURRENCY_RATES
} from "../actions/currencyRates/currencyRatesActionTypes";
import reducer from "./currencyRatesReducer";

describe("currency rates reducer", () => {
  const initialState = {
    rates: null,
    base: null,
    date: null,
    loading: false,
    error: null
  };
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  test("should handle START_LOADING_CURRENCY_RATES", () => {
    expect(reducer({}, { type: START_LOADING_CURRENCY_RATES })).toEqual({
      loading: true
    });
  });
  test("should handle SET_CURRENCY_RATES_LOADING_ERROR", () => {
    const error = new Error("Test error");
    expect(
      reducer(
        {
          loading: true
        },
        { type: SET_CURRENCY_RATES_LOADING_ERROR, error }
      )
    ).toEqual({
      loading: false,
      error
    });
  });
  test("should handle SET_CURRENCY_RATES", () => {
    const rates = { USD: 12345 };
    const base = "ABC";
    const date = "2018-11-23";
    expect(
      reducer(
        {
          loading: true,
          rates: {},
          base: "123",
          date: null,
          error: new Error("test error")
        },
        { type: SET_CURRENCY_RATES, rates, base, date }
      )
    ).toEqual({
      loading: false,
      rates,
      base,
      date,
      error: null
    });
  });
});
