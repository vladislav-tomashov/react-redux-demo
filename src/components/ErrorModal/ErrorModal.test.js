import React from "react";
import { shallow } from "enzyme";
import { ErrorModal } from "./ErrorModal";

let wrapper;

describe("ErrorModal component", () => {
  beforeEach(() => {
    wrapper = shallow(<ErrorModal />);
  });

  test("should render ErrorModal correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render ErrorModal with all props correctly", () => {
    const hideError = jest.fn();
    wrapper.setProps({
      isErrorShowing: true,
      hideError,
      error: new Error("test error")
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("should handle OK button click", () => {
    const hideError = jest.fn();
    wrapper.setProps({
      isErrorShowing: true,
      hideError,
      error: new Error("test error")
    });
    wrapper.find("button").simulate("click");
    expect(hideError).toBeCalledTimes(1);
  });
});
