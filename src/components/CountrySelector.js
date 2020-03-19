import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

import useStats from "../utils/useStats";
import CountryCase from "./CountryCase";
import "./CountrySelector.css";

const CountrySelector = () => {
  const [country, setCountry] = useState("India");

  const { stats } = useStats("https://covid19.mathdro.id/api/countries");
  let countryOptions = [];

  // Exlude the below countries as these are nor part of Flag component of semantic UI.
  const countriesToExclude = [
    "ss",
    "sx",
    "mf",
    "bl",
    "xk",
    "je",
    "im",
    "gg",
    "cw",
    "bq",
    "ag",
    "aq"
  ];
  if (stats) {
    countryOptions = Object.entries(stats.countries).map(([value, key]) => {
      if (countriesToExclude.includes(key.toLowerCase())) {
        return {};
      }
      return {
        key: key.toLowerCase(),
        value: value.toLowerCase(),
        flag: key.toLowerCase(),
        text: value
      };
    });
  }

  const filteredCountryOptions = countryOptions.reduce((acc, current) => {
    const x = acc.find(item => item.key === current.key);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  const onChangeHandler = (e, { value }) => {
    setCountry(value);
    console.log(country);
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
