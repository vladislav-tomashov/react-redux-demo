import { isErrorShowing, getError } from "./errorsSelectors";
import { ERRORS_REDUCER } from "../reducers/reducerNames";

describe("errors selectors", () => {
  test("should return error from state", () => {
    const error = new Error("test error");
    const state = {
      [ERRORS_REDUCER]: {
        error
      }
    };
    expect(getError(state)).toEqual(error);
  });
  test("should return if error is shown on the screen", () => {
    const showing = true;
    const state = {
      [ERRORS_REDUCER]: {
        showing
      }
    };
    expect(isErrorShowing(state)).toEqual(showing);
  });
});
