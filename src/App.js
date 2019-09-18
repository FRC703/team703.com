import React from "react";
import "./App.less";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Container } from "react-bulma-components";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
    </Router>
  );
}

export default App;
