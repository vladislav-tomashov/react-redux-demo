import React from "react";
import { shallow } from "enzyme";
import { CurrencyRatesList } from "./CurrencyRatesList";

let wrapper;

describe("CurrencyRatesList component", () => {
  beforeEach(() => {
    wrapper = shallow(<CurrencyRatesList />);
  });

  test("should render CurrencyRatesList correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
