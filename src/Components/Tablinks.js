import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Contact, Projects } from "./index";
class Tablinks extends Component {
  render() {
    const tablinks = (
      <div>
        <h3 className="description">
          <span className="highlight">Shashwat@Sahai:~$</span>{" "}
          <span className="input">
            For More Information Follow the Links
            <br />
          </span>
        </h3>
        <table className="tablinks">
          <thead>
            <tr>
              <td>
                <a href="/projects">
                  <u>Projects</u>
                </a>
              </td>
              <td>
                <a href="/contact">
                  <u>Contact</u>
                </a>
              </td>
              <td>
                <a href="/Blog">
                  <u>Blog</u>
                </a>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    );
    return tablinks;
  }
}

export default Tablinks;
