import React, { Component } from "react";
import { ProgressBar, Col, Row } from "react-bootstrap";
import styled from "styled-components";

class Skill extends Component {
  render() {
    return (
      <Styled>
        <Row>
          <Col sm={3}>{this.props.data.name}</Col>
          <Col sm={9}>
            <ProgressBar
              variant='success'
              now={this.props.data.value}
              label={`${this.props.data.value}%`}
            />
          </Col>
        </Row>
      </Styled>
    );
  }
}

const Styled = styled.div`
  .row {
    padding: 0;
  }

  .col-sm-9 {
    height: 100%;
    padding: 0;
  }

  .col-sm-3 {
    height: 100%;
  }

  .progress {
    width: inherit;
    height: inherit;
  }
`;

export default Skill;
