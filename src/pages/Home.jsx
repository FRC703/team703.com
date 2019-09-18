import React from "react";
import { Container, Heading, Hero } from "react-bulma-components";

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
        <Container></Container>
      </div>
    );
  }
}
