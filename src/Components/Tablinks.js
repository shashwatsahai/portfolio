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
                <Link to="/projects" component={Projects}>
                  <u>Projects</u>
                </Link>
              </td>
              <td>
                <Link to="/contact" component={Contact}>
                  <u>Contact</u>
                </Link>
              </td>
              <td>
                <Link to="/blog" component={Projects}>
                  <u>Blog</u>
                </Link>
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
