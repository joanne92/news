import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid col-lg-12 col-sm-12 col-xs-12">
        <ul>
          <Link to="/" id="nc-header" className="col-sm-12">
            {"< NC News />"}
          </Link>
          <Link to="/topics" className="topic-name col-sm-12">
            Topics
          </Link>
          <Link to="/articles" className="topic-name col-sm-12">
            Articles
          </Link>
        </ul>
      </div>
    );
  }
}

export default Header;
