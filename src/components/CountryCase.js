import React from "react";
import { Card, Header, Divider } from "semantic-ui-react";
import useStats from "../utils/useStats";
import Loader from "./Loader";
import { formatDate, titleCase } from "../utils/format";

const CountryCase = ({ country }) => {
  const { stats, loading } = useStats(
    `https://covid19.mathdro.id/api/countries/${country}`
  );
  if (loading) {
    return <Loader />;
  }
  if (stats) {
    const cdata = [
      {
        header: "Confirmed",
        description: stats.confirmed.value
      },
      {
        header: "Recovered",
        description: stats.recovered.value
      },
      {
        header: "Deaths",
        description: stats.deaths.value
      }
    ];
    return (
      <React.Fragment>
        <Divider hidden />
        <Header size="large" textAlign="center" color="green">
          Country Case: {titleCase(country)}
          <Header.Subheader>
            Last Updated: {formatDate(stats.lastUpdate)}
          </Header.Subheader>
        </Header>
        <Card.Group centered items={cdata} />
      </React.Fragment>
    );
  }
  return <p>Fetching the data</p>;
};

export default CountryCase;
