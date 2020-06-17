import React, { Component } from "react";
import styled from "styled-components";

import MainHeader from "./MainHeader";
import Skills from "./Skills";
import Expertise from "./Expertise";
import Projects from "./Projects";
import Leadership from "./Leadership";
import Contact from "./Contact";

import { Button } from "react-bootstrap";
import links from "./links";

class Main extends Component {
  render() {
    return (
      <Styled>
        <MainHeader />
        <Button variant='outline-dark' href={links.resume}>
          Resume
        </Button>
        <Skills />
        <Expertise />
        <Projects />
        <Leadership />
        <div className='dividing-line' />
        <Contact />
        This page is under construction by - Andrew T. Lim ✋🏻
      </Styled>
    );
  }
}

const Styled = styled.div`
  .dividing-line {
    display: block;
    margin: 0 auto;
    width: 50%;
    padding-top: 0.1em;
    border-bottom: 1px solid black;
  }

  .btn {
    margin-top: 1.5rem;
  }
`;
export default Main;
