import React, { Component } from "react";
import axios from "axios";

class Commentid extends Component {
  state = {
    votes: this.props.comment.votes,
    input: ""
  };
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
        <li>User:{comment.created_by}</li>
        <li>{comment.created_at}</li>
        <li>
          <i
            className="fas fa-trash"
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

  // deleteComment = id => {
  //   // const newArr = this.state.comments.filter(comment => {
  //   //   return comment._id !== id;
  //   // });
  //   // this.setState({ comments: newArr });
  //   axios
  //     .delete(`https://nc-news-jo.herokuapp.com/api/comments/${id}`)
  //     .then(res => console.log(res));
  // };
}

export default Commentid;
