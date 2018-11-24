import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import { CurrencyRatesList } from "./CurrencyRatesList";

describe("CurrencyRatesList component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrencyRatesList />);
  });

  test("should render empty CurrencyRatesList correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render CurrencyRatesList correctly with provided values", () => {
    const date = moment("2018-12-31").toDate();
    const base = "ABC";
    const rates = {
      USD: 0.12345,
      BCD: 123.456
    };
    wrapper.setProps({
      date,
      base,
      rates
    });
    expect(wrapper).toMatchSnapshot();
  });
});
