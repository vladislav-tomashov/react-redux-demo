import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import currencyRatesReducer from "./currencyRatesReducer";

const rootReducer = combineReducers({
  errors: errorsReducer,
  currencyRates: currencyRatesReducer
});

export { rootReducer as default };
