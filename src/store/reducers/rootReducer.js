import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";
import errorsReducer from "./errorsReducer";
import currencyRatesReducer from "./currencyRatesReducer";
import currencyRatesWithErrorsReducer from "./currencyRatesWithErrorsReducer";
import { ERRORS_REDUCER, CURRENCY_RATES_REDUCER } from "./reducerNames";

const combinedReducer = combineReducers({
  [ERRORS_REDUCER]: errorsReducer,
  [CURRENCY_RATES_REDUCER]: currencyRatesReducer
});

const rootReducer = reduceReducers(
  combinedReducer,
  currencyRatesWithErrorsReducer
);

export { rootReducer as default };
