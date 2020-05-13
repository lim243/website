import React, { Component } from "react";
import styled from "styled-components";

import MainHeader from "./MainHeader";
import Skills from "./Skills";
import Expertise from "./Expertise";
import Projects from "./Projects";

class Main extends Component {
  render() {
    return (
      <Styled>
        <MainHeader />
        <Skills />
        <Expertise />
        <Projects />
      </Styled>
    );
  }
}

const Styled = styled.div`
  // height: 100%;
`;
export default Main;
