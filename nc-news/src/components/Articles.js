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
      <div id="all-articles">
        <ul>
          {articles.map((article, i) => {
            return (
              <div key={`${i}${article.title}`} className="article">
                <Link
                  to={`/articles/${article._id}/comments`}
                  className="article-title"
                >
                  {article.title}
                </Link>
                <p className="article-body">{article.body}</p>
                <i className="fa fa-arrow-circle-up" />
                <li className="votes">{article.votes}</li>
                <i className="fa fa-arrow-circle-down" />
                <li>Comments: {article.comments}</li>
                <li>{article.created_by}</li>
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

  // getAllArticles = () => {
  //   fetch("https://nc-news-jo.herokuapp.com/api/articles")
  //     .then(res => res.json())
  //     .then(res => res.articles)
  //     .then(articles => {
  //       return articles.map(article => {
  //         this.state.users.forEach(user => {
  //           if (article.created_by === user._id) {
  //             return (article.user = user.name);
  //           }
  //         });
  //       });
  //     })
  //     .then(res => this.setState({ articles: res }));
  // };
}

export default Articles;
