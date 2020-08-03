import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import links from "./links";

class Contact extends Component {
  render() {
    return (
      <Styled id="contact">
        <h5>Follow me here!</h5>
        <div className='icon-row'>
          <a className='icons' href='https://github.com/lim243' alt='Github'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className='icons' href='https://linkedin.com/in/andrew-t-lim-a36177149/' alt='LinkedIn'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className='icons' href='mailto:lim243@purdue.edu' alt='Email'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a className='icons' href={links.resume} alt='Resume'>
            <FontAwesomeIcon icon={faFile} />
          </a>
        </div>
      </Styled>
    );
  }
}

const Styled = styled.div`
  margin: 1rem 0;

  .icons {
    color: black;
    padding: 0.1em;
    font-size: 25px;
    text-align: center;
    margin: 5px;
  }
`;
export default Contact;
