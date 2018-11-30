import {
  SET_CURRENCY_RATES_ERROR,
  SET_CURRENCY_RATES
} from "../actions/currencyRates/currencyRatesActionTypes";
import { SET_ERROR, RESET_ERROR } from "../actions/errors/errorsActionTypes";
import {
  ERRORS_REDUCER,
  CURRENCY_RATES_REDUCER
} from "../reducers/reducerNames";
import reducer from "./currencyRatesWithErrorsReducer";
import ratesReducer from "./currencyRatesReducer";
import errorsReducer from "./errorsReducer";

describe("combined currency rates with errors reducer", () => {
  test("should return the initial state", () => {
    const initialState = undefined;
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  test("should handle SET_CURRENCY_RATES_ERROR", () => {
    const initialRatesState = {
      loading: true
    };
    const initialErrorsState = {
      error: null,
      showing: false
    };
    const error = new Error("Test error");
    const ratesState = ratesReducer(initialRatesState, {
      type: SET_CURRENCY_RATES_ERROR,
      error
    });
    const errorState = errorsReducer(initialErrorsState, {
      type: SET_ERROR,
      error
    });
    expect(
      reducer(
        {
          [CURRENCY_RATES_REDUCER]: initialRatesState,
          [ERRORS_REDUCER]: initialErrorsState
        },
        { type: SET_CURRENCY_RATES_ERROR, error }
      )
    ).toEqual({
      [CURRENCY_RATES_REDUCER]: ratesState,
      [ERRORS_REDUCER]: errorState
    });
  });
  test("should handle SET_CURRENCY_RATES", () => {
    const initialRatesState = {
      loading: true
    };
    const error = new Error("Test error");
    const initialErrorsState = {
      error,
      showing: true
    };
    const date = "2018-11-12";
    const base = "ABC";
    const rates = { USD: 123 };
    const ratesState = ratesReducer(initialRatesState, {
      type: SET_CURRENCY_RATES,
      rates,
      base,
      date
    });
    const errorState = errorsReducer(initialErrorsState, {
      type: RESET_ERROR
    });
    expect(
      reducer(
        {
          [CURRENCY_RATES_REDUCER]: initialRatesState,
          [ERRORS_REDUCER]: initialErrorsState
        },
        {
          type: SET_CURRENCY_RATES,
          rates,
          base,
          date
        }
      )
    ).toEqual({
      [CURRENCY_RATES_REDUCER]: ratesState,
      [ERRORS_REDUCER]: errorState
    });
  });
});
