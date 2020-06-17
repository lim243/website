import React, { Component } from "react";
import styled from "styled-components";

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
        </span>
      </Styled>
    );
  }
}

const Styled = styled.div`
  // margin-bottom: 3rem;
  background-color: #D7CEC7;
  display: flex;
  padding: 5rem;
  // height: 100%;
  flex-direction: column;

  .icon-row {
    width: 100%;
  }

  .name {
    // font-family: Cabin;
    font-weight: bold;
  }

  .mini-description {
    font-size: 20px;
    // font-family: Cabin;
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
