import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import Result from "./Result";

export const GET_CITY_WEATHER = gql`
  query GetCityWeather($input: String!) {
    getCityByName(name: $input) {
      id
      name
      country
      weather {
        summary {
          title
          description
          icon
        }
      }
    }
  }
`;

export const Weather = () => {
  const [input, setInput] = useState("");
  const [cityName, setCityName] = useState("");
  const [getWeather, { called, error, loading, data }] = useLazyQuery(
    GET_CITY_WEATHER,
    {
      variables: {
        input: cityName,
      },
    }
  );

  return (
    <div>
      <div className="search-bar">
        <h1>Weather</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCityName(input);
            getWeather();
          }}
        >
          <input
            id="city"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Enter City"
            required
          />
          <button>Submit</button>
        </form>
      </div>
      <Result called={called} error={error} loading={loading} data={data} />
    </div>
  );
};
