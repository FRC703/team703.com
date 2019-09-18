import React, { Component } from "react";
import { Box, Columns, Section, Heading } from "react-bulma-components";

export default class EventSection extends Component {
  render() {
    return (
      <Section>
        <Columns>
          <Columns.Column size={8}>
            <Heading size={4}>{this.props.name}</Heading>
          </Columns.Column>
          <Columns.Column>
            <Box></Box>
          </Columns.Column>
        </Columns>
      </Section>
    );
  }
}
