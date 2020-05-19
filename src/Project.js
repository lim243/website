import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const repoBlock = (link) => {
  return <a href={link}>Repo</a>;
};

const liveBlock = (link) => {
  return <a href={link}>Website</a>;
};

const renderFrameworks = (frameworks) => {
  return frameworks.map((frame) => <p className='frameworks'>{frame}</p>);
};

class Project extends Component {
  render() {
    return (
      <Styled className='col-12 col-lg-4 nopadding'>
        <img className='img-fluid' src={this.props.proj.img} />
        <div className='filter-overlay'>
          <h4>{this.props.proj.name}</h4>
          <p>{this.props.proj.description}</p>
          <p>{this.props.proj.repo ? repoBlock(this.props.proj.repo) : ""} </p>
          {this.props.proj.live ? liveBlock(this.props.proj.live) : ""}
          {/* {this.props.proj.frameworks ? (
            <div className='frameworks-container'>
              {renderFrameworks(this.props.proj.frameworks)}
            </div>
          ) : (
            ""
          )} */}
        </div>
      </Styled>
    );
  }
}

const Styled = styled.div`
  height: inherit;
  padding: 7.5px;

  :hover .filter-overlay {
    opacity: 0.9;
  }

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  img {
    vertical-align: middle;
    width: 100%;
    height: 350px;
  }

  .frameworks-container {
    margin: auto;
    display: flex;
    justify-content: center;
  }

  .filter-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgb(255, 255, 255);
    text-align: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    padding: 70px 0;
  }

  .filter-overlay h4 {
    font-weight: bold;
    font-size: 30px;
    margin-top: 10px;
    text-decoration: underline;
    padding: 0 40px;
  }

  .filter-overlay p {
    padding: 0 40px;
  }

  .frameworks {
    border: 1px solid;
    border-radius: 2px;
    margin: 5px;
    padding: 5px 15px;
    background-color: #e9ecef;
    border-color: #e9ecef;
    color: #333;
  }
`;
export default Project;
