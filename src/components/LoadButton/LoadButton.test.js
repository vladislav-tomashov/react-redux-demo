import React from "react";
import { shallow } from "enzyme";
import { LoadButton } from "./LoadButton";

let wrapper;

describe("LoadButton component", () => {
  beforeEach(() => {
    wrapper = shallow(<LoadButton />);
  });

  test("should render LoadButton correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render LoadButton with 'loading' props correctly", () => {
    wrapper.setProps({
      loading: true
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("should render LoadButton with 'loaded' props correctly", () => {
    wrapper.setProps({
      loaded: true
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("should render LoadButton with all props correctly", () => {
    const loadCurrencyRates = jest.fn();
    wrapper.setProps({
      loading: false,
      loaded: true,
      loadCurrencyRates
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("should handle button click", () => {
    const loadCurrencyRates = jest.fn();
    wrapper.setProps({
      loading: false,
      loaded: true,
      loadCurrencyRates
    });
    wrapper.find("button").simulate("click");
    expect(loadCurrencyRates).toBeCalledTimes(1);
  });
});
