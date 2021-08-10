import React, { Component } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import Project from "./Project";

class Projects extends Component {
  render() {
    return (
      <Styled className="proj-row container-fluid">
        <Row>
          <Project proj={projs.wzstats} />
          <Project proj={projs.dunnit} />
          <Project proj={projs.creekit} />
        </Row>
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
      </Styled>
    );
  }
}

const Styled = styled.div``;

// TODO: optional Link
const projs = {
  wzstats: {
    name: "Warzone Stats",
    description: `Had fun playing Call of Duty Warzone and decided to do some coding with it. This is just a simple discord bot that shows player's recent performance on the matches.`,
    live: "https://discord.com/api/oauth2/authorize?client_id=787421783711940629&permissions=36507420672&scope=bot",
    frameworks: ["NodeJS", "PostgreSQL", "React", "Express", "Heroku"],
    img: "img/wz_logo.jpg",
  },
  dunnit: {
    name: "Dunnit",
    description: `An iOS task application that focuses on college student needs. One of the main functions include having a location notification feature that notifies the user if they are physically close to a task location.`,
    repo: "https://github.com/zheng416/Dunnit2",
    frameworks: ["iOS", "Firebase", "Swift"],
    img: "img/todo.jpg",
  },
  creekit: {
    name: "Creekit",
    description: `A social media web application that tries to combine the best features of the mainstream social media. Users can make reddit style posts with the ability to add friends and communicate with each other.`,
    repo: "https://github.com/lim243/CreekIt",
    frameworks: ["Discord", "Bot", "Call of Duty Warzone", "Node Call of Duty"],
    img: "img/social.jpg",
  },
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
