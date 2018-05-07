import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Commentid.css";

class Commentid extends Component {
  state = {
    votes: this.props.comment.votes,
    input: "",
    userName: ""
  };

  render() {
    const { comment, i } = this.props;
    return (
      <div className="comment">
        <p className="article-body">{comment.body}</p>
        <div className="icons">
          <i
            className="fa fa-arrow-circle-up"
            onClick={() => this.voteUp(comment._id)}
          />
          <li className="votes">{this.state.votes}</li>
          <i
            className="fa fa-arrow-circle-down"
            onClick={() => this.voteDown(comment._id)}
          />

          <Link to={`/users/${comment.created_by}`} className="comment-user">
            {/* User: {this.state.userName} */}
            <i className="fas fa-user" />
          </Link>

          <li>
            <i
              className="fas fa-trash fa-lg"
              onClick={() => this.props.deleteComment(comment._id)}
            />
          </li>
        </div>
      </div>
    );
  }

  voteUp = id => {
    axios.put(`https://nc-news-jo.herokuapp.com/api/comments/${id}?vote=up`);

    this.setState({ votes: this.state.votes + 1 });
  };

  voteDown = id => {
    axios.put(`https://nc-news-jo.herokuapp.com/api/comments/${id}?vote=down`);

    this.setState({ votes: this.state.votes - 1 });
  };
}

export default Commentid;
