import React from "react";
import { shallow } from "enzyme";
import { LoadButton } from "./LoadButton";
import { LOADING, LOADED } from "./requestStatuses";

let wrapper;

describe("LoadButton component", () => {
  beforeEach(() => {
    const props = {
      makeRequest: jest.fn()
    };
    wrapper = shallow(<LoadButton {...props} />);
  });

  test("should render LoadButton correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render LoadButton with 'loading' props correctly", () => {
    wrapper.setProps({
      requestStatus: LOADING
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("should render LoadButton with 'loaded' props correctly", () => {
    wrapper.setProps({
      requestStatus: LOADED
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("should render LoadButton with all props correctly", () => {
    const makeRequest = jest.fn();
    wrapper.setProps({
      requestStatus: LOADED,
      makeRequest
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("should handle button click", () => {
    const makeRequest = jest.fn();
    wrapper.setProps({
      requestStatus: LOADED,
      makeRequest
    });
    wrapper.find("button").simulate("click");
    expect(makeRequest).toBeCalledTimes(1);
  });
});
