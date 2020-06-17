import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const frameworks = [
  "React",
  "Redux",
  "React Native",
  "Firebase",
  "MongoDB",
  "Express",
  "NodeJS",
  "GoogleMaps API",
  "GooglePlaces API",
];

const apis = ["Pandas", "Ggplot Python"];

const renderFrameworks = frameworks.map((frame) => <p className='framework'>{frame}</p>);
const renderAPIs = apis.map((api) => <p className='frameworks'>{api}</p>);

class Expertise extends Component {
  render() {
    return (
      <Styled>
        <div className='expertise'>{renderFrameworks}</div>
        {/* <div className='row expertise'>{renderAPIs}</div> */}
      </Styled>
    );
  }
}

const Styled = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // flex-wrap: wrap;

  .expertise {
    flex-wrap: wrap;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .framework {
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
