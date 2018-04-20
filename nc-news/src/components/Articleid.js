import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Articleid extends Component {
  state = {
    votes: this.props.article.votes
  };

  render() {
    const { article, i } = this.props;
    console.log("votes", this.state.votes);
    return (
      <div className="article">
        <Link
          to={`/articles/${article._id}/comments`}
          className="article-title"
        >
          {article.title}
        </Link>
        <p className="article-body">{article.body}</p>
        <i
          className="fa fa-arrow-circle-up"
          onClick={() => this.voteUp(article._id)}
        />
        <li className="votes">{this.state.votes}</li>
        <i
          className="fa fa-arrow-circle-down"
          onClick={() => this.voteDown(article._id)}
        />
        <li>Comments: {article.comments}</li>
        <li>{article.created_by}</li>
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
