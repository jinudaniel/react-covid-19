import React from "react";
import "./App.css";

import { Divider } from "semantic-ui-react";

import Header from "./components/Header";
import Case from "./components/Case";
import CountrySelector from "./components/CountrySelector";

function App() {
  return (
    <div>
      <Header />
      <Case />
      <Divider hidden />
      <CountrySelector />
    </div>
  );
}

export default App;
