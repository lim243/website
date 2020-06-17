import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";

// TODO: Make roles on click to show description
const leaderships = [
  {
    name: "Purdue University Malaysian Students Association",
    logo: "img/pumsalogo.png",
    roles: [
      { title: "President", year: "2018-2019", description: "TBA" },
      { title: "Cultural Officer", year: "2017-2018" },
    ],
  },
];

const mapRoles = (roles) => {
  return roles.map((role, key) => (
    // <li>
    <Row className='title-row justify-content-md-center'>
      <Col xs lg='2'>
        {role.title}
      </Col>
      <Col xs lg='2'>
        {role.year}
      </Col>
    </Row>
    // </li>
  ));
};

const renderLeaderships = leaderships.map((leader, index) => (
  <div key={index} className='leadership-container'>
    <img className='img-fluid' src={leader.logo} />
    <div className='leadership-element'>
      <h4>{leader.name}</h4>
      <ul>{mapRoles(leader.roles)}</ul>
    </div>
  </div>
));

class Leadership extends Component {
  render() {
    return <Styled>{renderLeaderships}</Styled>;
  }
}

const Styled = styled.div`
  .img-fluid {
    height: 100px;
  }

  .leadership-container {
    flex-wrap: wrap;
    // margin: 0 20rem;
  }

  .leadership-element {
    // padding: 0 5rem;
  }

  .title-col {
    margin: 5rem;
  }
`;
export default Leadership;
