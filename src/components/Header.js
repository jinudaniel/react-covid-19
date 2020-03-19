import React from "react";
import { Header, Icon } from "semantic-ui-react";

const HeaderComponent = () => {
  return (
    <Header as="h2" textAlign="center" color="green" icon>
      <Icon name="medkit" />
      Covid-19 Dashboard
      <Header.Subheader>Dashboard for Coronavirus</Header.Subheader>
    </Header>
  );
};

export default HeaderComponent;
