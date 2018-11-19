import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import currencyRatesReducer from "./currencyRatesReducer";
import loaderReducer from "./loaderReducer";

const rootReducer = combineReducers({
  errors: errorsReducer,
  currencyRates: currencyRatesReducer,
  loader: loaderReducer
});

export { rootReducer as default };
