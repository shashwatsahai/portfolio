import React, { Component } from "react";
import "./Projects.scss";
import Tablinks from "./Tablinks";
import { Link } from "react-router-dom";

class Projects extends Component {
  //   state = {
  //     text: ["Web Developer", "Backend Developer", "Software Engineer"],
  //     curIndex: 0,
  //   };

  //   onAnimationIteration = () => {
  //     this.setState({ curIndex: (this.state.curIndex + 1) % 3 });
  //   };

  render() {
    // var index = this.state.curIndex;

    // var textToShow = this.state.text[index];

    const maincontainer = (
      <div>
        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <Link to="/home">
              <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
            </Link>
          </div>

          <h3 className="description">
            <span className="highlight">Shashwat@Sahai:~$</span>{" "}
            <span className="input">Projects</span>
          </h3>
          <h3>
            <i className="fa fa-github"></i>:{" "}
            <a
              href="https://github.com/shashwatsahai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/shashwatsahai
            </a>
            <br />
            <br />
            <i className="fa fa-phone"></i>: +91-8376869759
          </h3>

          <div id="projects">
            <h3>
              <a href="/projects/chess/">
                1. Chess- <br />
              </a>
              Multiplayer Chess App with Socket.io and Express
              <br />
              Features-
              <ul>
                <li>Realtime Two Player</li>
                <li>Validation for Win and Valid Moves</li>
              </ul>
              <a href="https://github.com/shashwatsahai/chess-socket-multiplayer">
                Github
              </a>
              <br />
              <br />
              <a href="/projects/chat/">
                2. Chatroom- <br />
              </a>
              Chat Application with room functionality using Node.js and
              Socket.io
              <br />
              Features-
              <br />
              <ul>
                <li>Signup/Login</li>
                <li>Separate Rooms</li>
                <li>Chat Messages Searching</li>
              </ul>
              <a href="https://github.com/shashwatsahai/chatroom">Github</a>
            </h3>
          </div>
          <Tablinks />
          <br />
          <br />
        </div>
      </div>
    );
    return maincontainer;
  }
}

export default Projects;
