import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Maincontainer.scss";
import Tablinks from "./Tablinks";

class Maincontainer extends Component {
  state = {
    text: ["Backend Developer", "Software Engineer","Web Developer"],
    curIndex: 0,
  };

  onAnimationIteration = () => {
    this.setState({ curIndex: (this.state.curIndex + 1) % 3 });
  };

  render() {
    var index = this.state.curIndex;

    var textToShow = this.state.text[index];
    // function refreshPage() {
    //   window.location.reload(false);
    // }
    
    const maincontainer = (
      <div>
        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <a href="/home">
              <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
            </a>
          </div>

          <h2 className="name">Shashwat Sahai</h2>
          <h3 className="name">ssahai97@gmail.com</h3>
          <br />
          <p
            key={this.state.curIndex}
            className="line-1 anim-typewriter"
            onAnimationEndCapture={this.onAnimationIteration}
          >
            {textToShow}
          </p>

          <h3 className="description">
            <span className="highlight">Shashwat@Sahai:~$</span>{" "}
            <span className="input">
              Intro
              <br />
              <br />
            </span>
          </h3>
          <h3>
            Hi! I'm Shashwat, Backend
            Developer from India. I code and I know things <br />
            <br />I have worked on backend and content development of apps like{" "}
            <a
              href="https://longwalks.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Longwalks</u>
            </a>{" "}
            and{" "}
            <a
              href="https://www.splashlearn.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Splashlearn</u>
            </a>
            <br /> <br /> I have worked with Technologies like Node.js,
            Express.js, MongoDB, Neo4j, Elasticsearch etc.
          </h3>
          <br />

          <h3 className="description">
            <span className="highlight">Shashwat@Sahai:~$</span>{" "}
            <span className="input">
              Technologies
              <br />
            </span>
          </h3>
          <table className="techstack">
            <tbody>
              <tr>
                <td>Nodejs</td>
                <td>ExpressJs</td>
                <td>Neo4j</td>
              </tr>
              <tr>
                <td>MongoDB</td>
                <td>Firebase</td>
                <td>AWS</td>
              </tr>
              <tr>
                <td>ELK</td>
                <td>Websockets</td>
                <td>Redis</td>
              </tr>
            </tbody>
          </table>
          <br />
          <Tablinks/>
          <br />
          <br />
        </div>
      </div>
    );
    return maincontainer;
  }
}

export default Maincontainer;
