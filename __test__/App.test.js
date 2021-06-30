import { shallow, mount } from "enzyme";
import { expect } from "@jest/globals";
import { MockedProvider } from "@apollo/client/testing";

import App from "../client/components/App";
import { GET_CITY_WEATHER, Weather } from "../client/components/Weather";
import Result from "../client/components/Result";

describe("", () => {
  describe("<App />", () => {
    it("renders without crashing", () => {
      shallow(<App />);
    });
  });

  describe("<Weather />", () => {
    it("renders Weather header", () => {
      const wrapper = shallow(<Weather />);
      const weather = <h1>Weather</h1>;
      expect(wrapper.contains(weather)).toEqual(true);
    });
  });

  describe("<Result />", () => {
    const weatherProp = {
      called: false,
      error: true,
      loading: true,
      data: null,
    };

    it("accepts error props", () => {
      const wrapper = mount(<Result loading={weatherProp.loading} />);
      expect(wrapper.props().loading).toEqual(weatherProp.loading);
    });
  });
});
