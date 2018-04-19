import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="col-lg-12">
        <ul>
          <Link to="/" id="nc-header">
            NC News
          </Link>
          <Link to="/topics" className="topic-name">
            Topics
          </Link>
          <Link to="/articles" className="topic-name">
            Articles
          </Link>
        </ul>
      </div>
    );
  }
}

export default Header;
