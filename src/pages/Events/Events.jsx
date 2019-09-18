import React from "react";
import { Container } from "react-bulma-components";
import EventSection from "./components/EventSection";
import Navbar from "../../components/Navbar";

export default class Events extends React.Component {
  render() {
    return (
      <Container>
        <Navbar></Navbar>
        <EventSection name="FIM District Gibraltar Event"></EventSection>
        <EventSection name="FIM District Alpena Event #2"></EventSection>
        <EventSection name="ROBO-CON Offseason"></EventSection>
        <EventSection name="Mid Mitten Roborodeo"></EventSection>
        <EventSection name="Great Lakes Bay Bot Bash"></EventSection>
      </Container>
    );
  }
}
