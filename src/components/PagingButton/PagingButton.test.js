import React from "react";
import { shallow } from "enzyme";
import PagingButton from "./PagingButton";

describe("PagingButton component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PagingButton>Test</PagingButton>);
  });

  test("should render PagingButton correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
