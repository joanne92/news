import React, { Component } from "react";

import Articleid from "./Articleid";

import "./Articles.css";

class Articles extends Component {
  state = {
    users: []
  };

  render() {
    let { articles } = this.props;

    return (
      <div className="all-articles">
        <ul>
          {articles.map((article, i) => {
            return (
              <div key={`${i}${article.title}`}>
                <Articleid article={article} i={i} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Articles;
