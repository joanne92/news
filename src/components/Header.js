import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="big-header col-sm-12 offset-lg.12">
        <nav class="navbar navbar-expand-sm">
          <ul class="navbar-nav">
            <div>
              <li class="nav-item active">
                <Link to="/" id="nc-header">
                  {"NC News"}
                </Link>
              </li>
            </div>

            <div>
              <li class="nav-item">
                <Link
                  to="/topics"
                  id="topics-header"
                  className="topic-name col-md-2 col-sm-12"
                >
                  Topics
                </Link>
              </li>
            </div>

            <div>
              <li class="nav-item">
                <Link
                  to="/articles"
                  id="articles-header"
                  className="topic-name col-md-2 col-sm-12"
                >
                  Articles
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
