import React, { Component } from "react";
import styled from "styled-components";

const frameworks = [
  "React",
  "Redux",
  "MongoDB",
  "Firebase",
  "Express",
  "Node",
  "GoogleMaps API",
];

const renderFrameworks = frameworks.map((frame) => <p className='frameworks'>{frame}</p>);

class Expertise extends Component {
  render() {
    return <Styled>{renderFrameworks}</Styled>;
  }
}

const Styled = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;

  .frameworks {
    border: 1px solid;
    border-radius: 2px;
    margin: 5px;
    padding: 5px 15px;
    background-color: #e9ecef;
    border-color: #e9ecef;
    color: #333;
  }
`;
export default Expertise;
