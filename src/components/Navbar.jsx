import React, { Component } from "react";

import { Level, Heading } from "react-bulma-components";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <Level renderAs="nav">
        <Level.Item>
          <Link to="/events">Events</Link>
        </Level.Item>
        <Level.Item>
          <Link to="/sara">SARA</Link>
        </Level.Item>
        <Level.Item>
          <Heading>
            <Link to="/">Team Phoenix</Link>
          </Heading>
        </Level.Item>
        <Level.Item>
          <Link to="/team">Team</Link>
        </Level.Item>
        <Level.Item>
          <Link to="/contact">Contact</Link>
        </Level.Item>
      </Level>
    );
  }
}
