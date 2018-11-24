import React from "react";
import { shallow } from "enzyme";
import CurrencyRatesItem from "./CurrencyRatesItem";

let wrapper;

describe("CurrencyRatesItem component", () => {
  beforeEach(() => {
    const props = {
      currency: "ABC",
      rate: 1
    };
    wrapper = shallow(<CurrencyRatesItem {...props} />);
  });

  test("should render CurrencyRatesItem correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
