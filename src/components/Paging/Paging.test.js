import React from "react";
import { shallow } from "enzyme";
import { Paging } from "./Paging";

describe("Paging component", () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      loadForToday: jest.fn(),
      loadForTomorrow: jest.fn(),
      loadForYesterday: jest.fn(),
      loading: false,
      date: null,
      nextDate: null
    };
    wrapper = shallow(<Paging {...props} />);
  });

  test("should render Paging correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render Paging with 'loading' props correctly", () => {
    wrapper.setProps({
      loading: true
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("should render Paging with 'date' props correctly", () => {
    wrapper.setProps({
      date: new Date()
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("should render Paging with all props correctly", () => {
    wrapper.setProps({
      date: new Date(),
      nextDate: new Date()
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("should handle [Load rates] button click", () => {
    const loadForToday = jest.fn();
    wrapper.setProps({
      loadForToday
    });
    wrapper.find("PagingButton").simulate("click");
    expect(loadForToday).toBeCalledTimes(1);
  });
  test("should handle [Next] button click", () => {
    const loadForTomorrow = jest.fn();
    wrapper.setProps({
      date: new Date(),
      loadForTomorrow
    });
    wrapper.find({ onClick: loadForTomorrow }).simulate("click");
    expect(loadForTomorrow).toBeCalledTimes(1);
  });
  test("should handle [Prevoius] button click", () => {
    const loadForYesterday = jest.fn();
    wrapper.setProps({
      date: new Date(),
      loadForYesterday
    });
    wrapper.find({ onClick: loadForYesterday }).simulate("click");
    expect(loadForYesterday).toBeCalledTimes(1);
  });
});
