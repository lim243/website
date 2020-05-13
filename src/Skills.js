import React, { Component } from "react";
import { ProgressBar, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Skill from "./Skill";

const labels = {
  "python": { name: "Python", "value": "100" },
  "java": { name: "Java", "value": "95" },
  "javascript": { name: "JavaScript", "value": "90" },
  "HTMLCSS": { name: "HTML/CSS", "value": "100" },
  "R": { name: "R", "value": "80" },
  "C": { name: "C", "value": "75" },
  "Cpp": { name: "C++", "value": "70" },
  "SQL": { name: "SQL", "value": "80" },
};

class Skills extends Component {
  render() {
    return (
      <Styled>
        <Row>
          <Col>
            <Skill data={labels.python} />
            <Skill data={labels.javascript} />
            <Skill data={labels.R} />
            <Skill data={labels.C} />
          </Col>
          <Col>
            <Skill data={labels.java} />
            <Skill data={labels.HTMLCSS} />
            <Skill data={labels.SQL} />
            <Skill data={labels.Cpp} />
          </Col>
        </Row>
      </Styled>
    );
  }
}

const Styled = styled.div`
  .row {
    height: 1.75rem;
    margin: 10px;
  }

  .col {
    height: inherit;
    padding: 0;
    margin 10px;
  }
`;

export default Skills;
