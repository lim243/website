import React, { Component } from "react";
import { ProgressBar, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Skill from "./Skill";

const labels = {
  "python": { name: "Python", value: "100" },
  "java": { name: "Java", value: "90" },
  "javascript": { name: "JavaScript", value: "90" },
  "HTMLCSS": { name: "HTML/CSS", value: "90" },
  "R": { name: "R", value: "80" },
  "C": { name: "C", value: "75" },
  "Cpp": { name: "C++", value: "70" },
  "SQL": { name: "SQL", value: "80" },
  "Pandas": { name: "Pandas", value: "90" },
  "ggplot": { name: "Ggplot", value: "90" },
};

class Skills extends Component {
  render() {
    return (
      <Styled id="skills">
        <Row>
          <Col>
            <Skill data={labels.python} />
            <Skill data={labels.javascript} />
            <Skill data={labels.R} />
            <Skill data={labels.C} />
            <Skill data={labels.Pandas} />
          </Col>
          <Col>
            <Skill data={labels.java} />
            <Skill data={labels.HTMLCSS} />
            <Skill data={labels.SQL} />
            <Skill data={labels.Cpp} />
            <Skill data={labels.ggplot} />
          </Col>
        </Row>
      </Styled>
    );
  }
}

const Styled = styled.div`
  // height: 12rem;
  padding-top: 2.2rem

  .row {
    margin: 10px;
  }

  .col {
    height: inherit;
    padding: 0;
    margin 10px;
  }
`;

export default Skills;
