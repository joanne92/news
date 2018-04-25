import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Commentid extends Component {
  state = {
    votes: this.props.comment.votes,
    input: "",
    userName: ""
  };

  componentDidMount() {
    this.getUsersName(this.props.comment);
  }

  componentWillReceiveProps(newProps) {
    this.getUsersName(newProps.comment);
    this.setState({});
  }

  render() {
    const { comment, i } = this.props;
    return (
      <div className="comment">
        <p className="article-body">{comment.body}</p>
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
          User: {this.state.userName}
        </Link>

        <li>
          <i
            className="fas fa-trash fa-lg"
            onClick={() => this.props.deleteComment(comment._id)}
          />
        </li>
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

  getUsersName = comment => {
    this.props.users.filter(user => {
      if (user._id === comment.created_by) {
        return this.setState({ userName: user.name });
      }
    });
  };
}

export default Commentid;
