import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

import useStats from "../utils/useStats";
import CountryCase from "./CountryCase";
import "./CountrySelector.css";

const CountrySelector = () => {
  const [country, setCountry] = useState("India");

  const { stats } = useStats("https://covid19.mathdro.id/api/countries");
  let countryOptions = [];

  if (stats) {
    countryOptions = Object.entries(stats.countries).map(([key, value]) => {
      if (value.iso2 !== undefined && value.name !== undefined) {
        return {
          key: value.iso2.toLowerCase(),
          value: value.name.toLowerCase(),
          flag: value.iso2.toLowerCase(),
          text: value.name
        };
      } else {
        return {};
      }
    });
  }

  const filteredCountryOptions = countryOptions.reduce((acc, current) => {
    if (current.key !== {} && acc !== {}) {
      const x = acc.find(item => item.key === current.key);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }
  }, []);

  const onChangeHandler = (e, { value }) => {
    setCountry(value);
  };

  return (
    <React.Fragment>
      {stats && (
        <React.Fragment>
          <div className="country-selector">
            <Dropdown
              placeholder="Select Country"
              fluid
              search
              selection
              options={filteredCountryOptions}
              onChange={onChangeHandler}
            />
          </div>
          <CountryCase country={country} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default CountrySelector;
