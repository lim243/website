import React, { Component } from "react";
import styled from "styled-components";

import MainHeader from "./MainHeader";

class Main extends Component {
  render() {
    return (
      <Styled>
        <MainHeader />
      </Styled>
    );
  }
}

const Styled = styled.div`
  height: 100%;
`;
export default Main;
