import React from "react";
import { shallow } from "enzyme";
import { Spinner } from "./Spinner";

let wrapper;

describe("Spinner component", () => {
  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  test("should render Spinner correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render Spinner with 'loading' props correctly", () => {
    wrapper.setProps({
      loading: true
    });
    expect(wrapper).toMatchSnapshot();
  });
});
