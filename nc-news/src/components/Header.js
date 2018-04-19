import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <ul>
            <Link to="/" className="heading header">
              NC-News!
            </Link>
            <Link to="/topics" className="link">
              Topics
            </Link>
            <Link to="/articles" className="link">
              Articles
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
