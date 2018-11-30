import React from "react";
import { shallow } from "enzyme";
import { Paging } from "./Paging";

describe("Paging component", () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      loadCurrencyRates: jest.fn(),
      loadForNextDay: jest.fn(),
      loadForPreviousDay: jest.fn(),
      date,
      loading,
      nextDate
    };
    wrapper = shallow(<Paging {...props} />);
  });

  test("should render Paging correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render Paging with 'loading' props correctly", () => {
    wrapper.setProps({
      requestStatus: LOADING
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("should render Paging with 'loaded' props correctly", () => {
    wrapper.setProps({
      requestStatus: LOADED
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("should render Paging with all props correctly", () => {
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
