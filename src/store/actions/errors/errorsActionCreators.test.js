import {
  resetError,
  setError,
  showError,
  hideError
} from "./errorsActionCreators";
import {
  RESET_ERROR,
  SET_ERROR,
  SHOW_ERROR,
  HIDE_ERROR
} from "./errorsActionTypes";

describe("errors actions", () => {
  test("should create an action for setting error", () => {
    const error = new Error("test error");
    const action = setError(error);
    expect(action).toEqual({
      type: SET_ERROR,
      error
    });
  });

  test("should create an action for reseting the error", () => {
    const action = resetError();
    expect(action).toEqual({
      type: RESET_ERROR
    });
  });

  test("should create an action to display error", () => {
    const action = showError();
    expect(action).toEqual({
      type: SHOW_ERROR
    });
  });

  test("should create an action to hide the error", () => {
    const action = hideError();
    expect(action).toEqual({
      type: HIDE_ERROR
    });
  });
});
