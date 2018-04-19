import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Articles.css";

class Articles extends Component {
  state = {
    users: [],
    articles: []
  };
  componentDidMount() {
    this.getAllUsers();
  }
  render() {
    let { articles } = this.props;
    // console.log(this.state);
    return (
      <div className="all-articles col-lg-8">
        <ul>
          {articles.map((article, i) => {
            // console.log(article._id);
            return (
              <div key={`${i}${article.title}`}>
                <p>{i + 1}.)</p>

                <Link
                  to={`/articles/${article._id}/comments`}
                  className="heading"
                >
                  {article.title}
                </Link>
                <p className="article-body">{article.body}</p>
                <li>Votes: {article.votes}</li>
                <li>Comments: {article.comments}</li>
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
    this.getAllArticles();
  };

  getAllArticles = () => {
    fetch("https://nc-news-jo.herokuapp.com/api/articles")
      .then(res => res.json())
      .then(res => res.articles)
      .then(articles => {
        return articles.map(article => {
          this.state.users.forEach(user => {
            if (article.created_by === user._id) {
              return (article.user = user.name);
            }
          });
        });
      })
      .then(res => this.setState({ articles: res }));
  };
}

export default Articles;
