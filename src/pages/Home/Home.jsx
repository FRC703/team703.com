import React from "react";
import { Container, Heading, Hero, Level } from "react-bulma-components";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero color="dark" size="fullheight">
          <Hero.Body>
            <Container>
              <Heading>Team Phoenix</Heading>
              <Heading subtitle>FRC 703</Heading>
            </Container>
          </Hero.Body>
        </Hero>
        <Navbar></Navbar>
        <Container></Container>
      </div>
    );
  }
}
