import React, { Component } from "react";
import styled from "styled-components";
import img from "./nola_fountain.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class MainHeader extends Component {
  render() {
    return (
      <Styled>
        <span className='title'>
          <h1 className='name '>Hi! I am Andrew</h1>

          <hr />
          <h6 className='mini-description'>
            Computer Science and Data Science student at Purdue University
          </h6>

          <div className='icon-row'>
            <a className='icons' href='https://github.com/lim243'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className='icons' href='https://linkedin.com/in/andrew-t-lim-a36177149/'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className='icons' href='mailto:lim243@purdue.edu'>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </span>
      </Styled>
    );
  }
}

const Styled = styled.div`
  // background-image: url(${img});
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: center center;
  // background-attachment: fixed;
  background-color: #D7CEC7;
  display: flex;
  padding: 5rem;
  // height: 100%;
  flex-direction: column;

  .icon-row {
    width: 100%;
  }

  .name {
    font-family: Cabin;
    font-weight: bold;
  }

  .mini-description {
    font-size: 20px;
    font-family: Cabin;
    letter-spacing: 2px;
    line-height: 1.3em;
    color: black;
  }

  .title {
    margin: auto;
    padding: 2.5rem;
    border-radius: 2rem
    background-color: white;
  }

  .icons {
    color: black;
    padding: 0.1em;
    font-size: 25px;
    text-align: center;
    margin: 5px;
  }
`;

export default MainHeader;
