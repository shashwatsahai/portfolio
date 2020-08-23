import React, { Component, useState } from "react";
import "./Maincontainer.scss";
import Navbar from "./Navbar";

class Maincontainer extends Component {
  state = {
    text: ["Web Developer", "Backend Developer", "Javascript Developer"],
    curIndex: 0,
  };

  onAnimationIteration = () => {
    this.setState({ curIndex: (this.state.curIndex + 1) % 3 });
  };

  render() {
    var index = this.state.curIndex;

    var textToShow = this.state.text[index];

    const maincontainer = (
      <div>
        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <a href="index.html">
              <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
            </a>
          </div>

          <h3>Shashwat Sahai</h3>
          <br></br>
          <p
            key={this.state.curIndex}
            className="line-1 anim-typewriter"
            onAnimationEndCapture={this.onAnimationIteration}
          >
            {textToShow}
          </p>
          <br></br>
        </div>
      </div>
    );
    return maincontainer;
  }
}

export default Maincontainer;
