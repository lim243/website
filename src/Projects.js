import React, { Component } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import Project from "./Project";

class Projects extends Component {
  render() {
    return (
      <Styled className='proj-row container-fluid'>
        <Row>
          <Project proj={projs.navi} />
          <Project proj={projs.ezcurrencyup} />
          <Project proj={projs.chatarang} />
        </Row>
        <Row>
          <Project proj={projs.highrollers} />
          <Project proj={projs.fliegen} />
          <Project proj={projs.memoryinfinite} />
        </Row>
        {/* <Row>
          <Project proj={projs.ircserver} />
          <Project proj={projs.shell} />
          <Project proj={projs.nba_stats} />
        </Row> */}
      </Styled>
    );
  }
}

const Styled = styled.div``;

// TODO: optional Link
const projs = {
  navi: {
    name: "Navitravels",
    description: `An intern project at Navi LLC. I developed and launched a web application that utilizes travel-style-based categorization to allow users to create
    potential trip collaborations and keep track of their trips in a personalizable map with added features currently absent
    in Google Maps`,
    live: "https://app.navitravels.com/",
    frameworks: ["MERN", "GoogleMaps API", "Facebook API", "React", "SocketIO"],
    img: "img/globe.jpeg",
  },
  shell: {
    name: "Unix Shell",
    description: `Implemented an interactive UNIX shell interpreter with C and C++ for systems programming class`,
    img: "img/globe.jpeg",
  },
  ezcurrencyup: {
    name: "EzCurrencyUp",
    description:
      "A simple web application (currency converter) for a systems programming final project at Purdue.",
    frameworks: ["React", "Firebase", "Google OAuth API"],
    repo: "https://github.com/lim243/CS252-Lab6",
    live: "https://ezcurrencyup-546ab.firebaseapp.com",
    img: "img/money.jpg",
  },
  chatarang: {
    name: "Chatarang",
    description: `Created this app during Summer at Xtern Bootcamp. 
                It is a live chat application that focus more on the front end development. It has sign in features, 
                distinct rooms, and emoji reactions.
                `,
    frameworks: ["React", "Firebase", "OAuth APIs"],
    repo: "https://github.com/lim243/chat-app",
    live: "https://chat-app-88598.firebaseapp.com/",
    img: "img/chat.jpg",
  },
  ircserver: {
    name: "IRC Application",
    description: `Internet Relay Chat Application, 
    Used C language to create IRC server and C++ to create IRC client
    ,Integrated server, client and built GUI with QT framework
    `,
    img: "img/globe.jpeg",
  },
  highrollers: {
    name: "High Rollers",
    description: `A summer project with a few friends to create a platform 
              for mini mobile games hosting to connect gamers and game developers.`,
    frameworks: ["React Native", "Heroku", "CircleCI", "GraphQL"],
    img: "img/connect.jpg",
  },
  fliegen: {
    name: "Fliegen",
    description: `A 3-day Hackathon project that is a mock web application 
              to reflect LinkedIn's connectivity feature by adding a rating 
              system in conversations to better protect applicants.`,
    frameworks: ["Sqlite3", "Heroku", "jQuery", "Express"],
    repo: "https://github.com/LCLY/boilermake2018",
    img: "img/suit.jpg",
  },
  memoryinfinite: {
    name: "MemoryInfinite",
    description:
      "A simple iOS music game written in a 1-day freshman Hackathon at Purdue. ",
    repo: "https://github.com/lim243/MemoryInfinite",
    img: "img/dice.jpg",
  },
  nba_stats: {
    name: "Statistical Review Of NBA Scored Points",
    description: `A final project for applied linear regression course at Purdue. 
    This project uses R to investigate the factors that are significantly 
    vital in impacting the amount of points obtained by National Basketball Association (NBA) teams.`,
    repo: "https://github.com/lim243/STAT512_FinalProject",
    img: "img/globe.jpeg",
    // frameworks: ["R"],
  },
};
export default Projects;
