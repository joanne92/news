import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="big-header col-sm-12 offset-lg.12">
        <nav class="navbar navbar-expand-sm">
          <div class="navbar-nav">
            <div>
              <div class="nav-item active">
                <Link to="/" id="nc-header">
                  {"NC News"}
                </Link>
              </div>
            </div>

            <div>
              <div class="nav-item">
                <Link
                  to="/topics"
                  id="topics-header"
                  className="topic-name col-md-2 col-sm-12"
                >
                  Topics
                </Link>
              </div>
            </div>

            <div>
              <div class="nav-item">
                <Link
                  to="/articles"
                  id="articles-header"
                  className="topic-name col-md-2 col-sm-12"
                >
                  Articles
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
