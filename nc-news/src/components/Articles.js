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
    console.log(this.state);
    return (
      <div id="all-articles">
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

  getAllUsers = () => {
    fetch("https://nc-news-jo.herokuapp.com/api/users")
      .then(res => res.json())
      .then(res => this.setState({ users: res.users }));
  };
}

export default Articles;

// return (
//   <div key={`${i}${article.title}`} className="article">
//     <Link
//       to={`/articles/${article._id}/comments`}
//       className="article-title"
//     >
//       {article.title}
//     </Link>
//     <p className="article-body">{article.body}</p>
//     <i className="fa fa-arrow-circle-up" />
//     <li className="votes">{article.votes}</li>
//     <i className="fa fa-arrow-circle-down" />
//     <li>Comments: {article.comments}</li>
//     <li>{article.created_by}</li>
//   </div>
// );
