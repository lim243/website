import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink, faFile } from "@fortawesome/free-solid-svg-icons";
import DividingLine from "./DividingLine";

// TODO: Make roles on click to show description
const leaderships = [
  {
    name: "Formstack",
    logo: "img/formstack_logo.svg",
    roles: [
      { title: "Software Engineering Intern", year: "2020-Present", description: "TBA" },
    ],
    uri: "https://www.formstack.com/"
  },
  {
    name: "Purdue University Malaysian Students Association",
    logo: "img/pumsalogo.png",
    roles: [
      { title: "President", year: "2018-2019", description: "TBA" },
      { title: "Cultural Officer", year: "2017-2018" },
    ],
    uri: "https://pumsa.wordpress.com/"
  },
  {
    name: "CS 38003 - Python Programming",
    logo: "img/purdue_logo.jpg",
    roles: [
      {
        title: "Undergraduate Teaching Assistant",
        year: "2020-Present",
        description: "TBA",
      },
    ],
    uri: "https://catalog.purdue.edu/preview_course_nopop.php?catoid=8&coid=82371"
  },
];

const mapRoles = (roles) => {
  return roles.map((role, key) => (
    // <li>
    <Row className='title-row justify-content-md-center'>
      <p className='col-lg-3 col'>{role.title}</p>
      <p className='col-lg-2 col'>{role.year}</p>
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
      <a className='icons' href={leader.uri}>
            <FontAwesomeIcon icon={faLink} />
      </a>
      <DividingLine />
    </div>
  </div>
));

class Leadership extends Component {
  render() {
    return <Styled>{renderLeaderships}</Styled>;
  }
}

const Styled = styled.div`
  margin: 1rem 0;

  .col {
    margin: 0;
    align-self: center;
  }

  .row {
    justify-content: center;
  }

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

  .icons {
    color: black;
    padding: 0.1em;
    font-size: 25px;
    text-align: center;
    margin: 5px;
  }
`;
export default Leadership;
