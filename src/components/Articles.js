import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Articleid from "./Articleid";

import "./Articles.css";

class Articles extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.getAllUsers();
  }
  render() {
    let { articles } = this.props;

    return (
      <div id="all-articles">
        <ul>
          {articles.map((article, i) => {
            return (
              <div key={`${i}${article.title}`}>
                <Articleid article={article} i={i} users={this.state.users} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  getAllUsers = () => {
    fetch("https://nc-news-jo.herokuapp.com/api/users")
      .then(res => res.json())
      .then(res => this.setState({ users: res.users }));
  };
}

export default Articles;
