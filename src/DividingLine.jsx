import React, { Component } from "react";
import styled from "styled-components";

class DividingLine extends Component {
  render() {
    return (
      <Styled>
        <div className='dividing-line' />
      </Styled>
    );
  }
}
const Styled = styled.div`
    .dividing-line {
        display: block;
        margin: 2rem auto;
        width: 70%;
        padding-top: 0.1em;
        border-bottom: 1px solid black;
    }
`

export default DividingLine;