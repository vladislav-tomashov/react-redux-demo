import {
  RESET_ERROR,
  SET_ERROR,
  SHOW_ERROR,
  HIDE_ERROR
} from "../actions/errors/errorsActionTypes";
import reducer from "./errorsReducer";

describe("errors reducer", () => {
  const initialState = {
    error: null,
    showing: false
  };
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  test("should handle SET_ERROR", () => {
    const error = new Error("test error");
    expect(
      reducer(
        {
          showing: false,
          error: "abc"
        },
        { type: SET_ERROR, error }
      )
    ).toEqual({
      showing: true,
      error
    });
  });
  test("should handle RESET_ERROR", () => {
    const error = new Error("test error");
    expect(
      reducer(
        {
          showing: true,
          error
        },
        { type: RESET_ERROR }
      )
    ).toEqual({
      showing: false,
      error: null
    });
  });
  test("should handle SHOW_ERROR when error is present", () => {
    const error = new Error("test error");
    expect(
      reducer(
        {
          showing: false,
          error
        },
        { type: SHOW_ERROR }
      )
    ).toEqual({
      showing: true,
      error
    });
  });
  test("should handle SHOW_ERROR when error is absent", () => {
    expect(
      reducer(
        {
          showing: false
        },
        { type: SHOW_ERROR }
      )
    ).toEqual({
      showing: false
    });
  });
  test("should handle HIDE_ERROR", () => {
    expect(
      reducer(
        {
          showing: true
        },
        { type: HIDE_ERROR }
      )
    ).toEqual({
      showing: false
    });
  });
});
