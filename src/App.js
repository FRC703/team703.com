import React from "react";
import "./App.less";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import { Container } from "react-bulma-components";

import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Team from "./pages/Team/Team";
import SARA from "./pages/SARA/SARA";
import Contact from "./pages/Contact/Contact";

import { createHashHistory } from "history";

const history = createHashHistory();

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home}></Route>
      <Route path="/sara" component={SARA}></Route>
      <Route path="/events" component={Events}></Route>
      <Route path="/team" component={Team}></Route>
      <Route path="/contact" component={Contact}></Route>
    </Router>
  );
}

export default App;
