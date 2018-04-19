import React, { Component } from "react";

import "./Articles.css";

class Articles extends Component {
  render() {
    console.log(this.props);
    let { articles, showAllArticles, currentTopic } = this.props;
    if (currentTopic) {
      return <div>{currentTopic}</div>;
    } else if (showAllArticles) {
      return (
        <div className="all-articles">
          <ul>
            {this.props.articles.map((article, i) => {
              return (
                <div key={`${i}${article.title}`} className="article">
                  <p>{i + 1}</p>
                  <p className="article-title">{article.title}</p>
                  <p className="article-body">{article.body}</p>
                  <li>{article.belongs_to}</li>
                  <li>{article.topicName}</li>
                  <li>{article.votes}</li>
                  <li>{article.created_by}</li>
                  <li>{article.comments}</li>
                </div>
              );
            })}
          </ul>
        </div>
      );
    }

    return (
      <div className="most-voted-articles">
        <ul>
          {this.props.articles.map((article, i) => {
            while (i < 6) {
              return (
                <div key={`${i}${article.title}`} className="article">
                  <p>{i + 1}</p>
                  <p className="article-title">{article.title}</p>
                  <p className="article-body">{article.body}</p>
                  <li>{article.belongs_to}</li>
                  <li>{article.votes}</li>
                  <li>{article.created_by}</li>
                  <li>{article.comments}</li>
                </div>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Articles;
