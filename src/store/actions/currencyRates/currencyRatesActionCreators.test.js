import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  setCurrencyRates,
  startLoadingCurrencyRates,
  setCurrencyRatesLoadingError,
  loadCurrencyRates
} from "./currencyRatesActionCreators";
import {
  SET_CURRENCY_RATES,
  START_LOADING_CURRENCY_RATES,
  SET_CURRENCY_RATES_LOADING_ERROR
} from "./currencyRatesActionTypes";
import {
  CURRENCY_RATES_REDUCER,
  ERRORS_REDUCER
} from "../../reducers/reducerNames";

const testDataCurrencyRates = {
  date: "2018-11-23",
  base: "EUR",
  rates: {
    BGN: 1.9558,
    CAD: 1.5019,
    BRL: 4.3205,
    HUF: 322.03,
    DKK: 7.4618,
    JPY: 128.07,
    ILS: 4.2413,
    TRY: 5.9992,
    RON: 4.6577,
    GBP: 0.8848,
    PHP: 59.477,
    HRK: 7.4324,
    NOK: 9.7365,
    USD: 1.1352,
    MXN: 23.0983,
    AUD: 1.5708,
    IDR: 16495.81,
    KRW: 1285.15,
    HKD: 8.8837,
    ZAR: 15.7507,
    ISK: 140.4,
    CZK: 25.954,
    THB: 37.552,
    MYR: 4.7635,
    NZD: 1.6747,
    PLN: 4.2949,
    SEK: 10.3043,
    RUB: 74.7114,
    CNY: 7.8866,
    SGD: 1.5605,
    CHF: 1.1316,
    INR: 80.204
  }
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("currency rates sync actions", () => {
  test("should create an action to set currency rates with provided values", () => {
    const { rates, date, base } = testDataCurrencyRates;
    const action = setCurrencyRates({ rates, date, base });
    expect(action).toEqual({
      type: SET_CURRENCY_RATES,
      rates,
      date,
      base
    });
  });

  test("should create an action that currency rates loading is started", () => {
    const action = startLoadingCurrencyRates();
    expect(action).toEqual({
      type: START_LOADING_CURRENCY_RATES
    });
  });

  test("should create an error action as a result of currency rates loading", () => {
    const error = new Error("test error");
    const action = setCurrencyRatesLoadingError(error);
    expect(action).toEqual({
      type: SET_CURRENCY_RATES_LOADING_ERROR,
      error
    });
  });
});

describe("currency rates async actions", () => {
  const initialCurrencyRatesState = {};
  const initialErrorsState = {};
  const storeInitialState = {
    [CURRENCY_RATES_REDUCER]: initialCurrencyRatesState,
    [ERRORS_REDUCER]: initialErrorsState
  };

  beforeEach(() => {
    fetch.resetMocks();
  });

  test("should fetch currency rates from URL and create actions for that", async () => {
    expect.assertions(1);

    fetch.mockResponseOnce(JSON.stringify(testDataCurrencyRates));

    const { rates, date, base } = testDataCurrencyRates;
    const expectedActions = [
      { type: START_LOADING_CURRENCY_RATES },
      { type: SET_CURRENCY_RATES, rates, base, date }
    ];
    const store = mockStore(storeInitialState);

    await store.dispatch(loadCurrencyRates());

    expect(store.getActions()).toEqual(expectedActions);
  });

  test("should create an error action if something went wrong while loading currency rates from URL", async () => {
    expect.assertions(1);

    const error = new Error("test error");
    fetch.mockReject(error);

    const expectedActions = [
      { type: START_LOADING_CURRENCY_RATES },
      { type: SET_CURRENCY_RATES_LOADING_ERROR, error }
    ];
    const store = mockStore(storeInitialState);

    await store.dispatch(loadCurrencyRates());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
