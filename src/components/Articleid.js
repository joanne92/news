import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Articlesid.css";

class Articleid extends Component {
  state = {
    votes: this.props.article.votes,
    userName: ""
  };

  render() {
    const { article, i } = this.props;
    console.log(this.state);
    return (
      <div className="article">
        <Link
          to={`/articles/${article._id}/comments`}
          className="article-title"
        >
          {article.title}
        </Link>
        <p className="article-body">{article.body}</p>
        <div className="icons">
          <i
            className="fa fa-arrow-circle-up fa-2x"
            onClick={() => this.voteUp(article._id)}
          />
          <li className="votes">{this.state.votes}</li>
          <i
            className="fa fa-arrow-circle-down fa-2x"
            onClick={() => this.voteDown(article._id)}
          />
          <Link
            to={`/articles/${article._id}/comments`}
            className="article-title"
          >
            <span class="fa-stack">
              <i class="fa fa-comment fa-stack-2x" />
              <strong class="fa-stack-1x">{article.comments}</strong>
            </span>
          </Link>

          <Link to={`/users/${article.created_by}`} className="article-user">
            <i className="fas fa-user fa-lg" />
          </Link>
        </div>
      </div>
    );
  }

  voteUp = id => {
    axios.put(`https://nc-news-jo.herokuapp.com/api/articles/${id}?vote=up`);

    this.setState({ votes: this.state.votes + 1 });
  };

  voteDown = id => {
    axios.put(`https://nc-news-jo.herokuapp.com/api/articles/${id}?vote=down`);

    this.setState({ votes: this.state.votes - 1 });
  };
}

export default Articleid;
