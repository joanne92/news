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
          <div className="article-votes">
            <i
              className="fa fa-arrow-circle-up fa-2x"
              onClick={() => this.voteUp(article._id)}
            />
            <div className="votes">{this.state.votes}</div>
            <i
              className="fa fa-arrow-circle-down fa-2x"
              onClick={() => this.voteDown(article._id)}
            />
          </div>
          <div className="article-comments">
            <Link to={`/articles/${article._id}/comments`}>
              <div className="woo">
                <i class="fa fa-comment" />
                <div className="test">{article.comments}</div>
              </div>
            </Link>
          </div>
          <div className="article-commenter">
            <Link to={`/users/${article.created_by}`} className="article-user">
              <i className="fas fa-user fa-lg" />
            </Link>
          </div>
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
