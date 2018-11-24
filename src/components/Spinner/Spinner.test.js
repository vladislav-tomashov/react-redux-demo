import React from "react";
import { shallow } from "enzyme";
import { Spinner } from "./Spinner";

describe("Spinner component", () => {
  let wrapper;

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
