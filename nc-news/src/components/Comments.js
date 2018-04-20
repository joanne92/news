import React, { Component } from "react";
import "./Comments.css";
import axios from "axios";

import Commentid from "./Commentid";

class Comments extends Component {
  state = {
    comments: [],
    input: ""
  };
  componentDidMount() {
    this.getCommentsByArticleId(this.props.articleid);
  }

  componentWillReceiveProps(newProps) {
    this.getCommentsByArticleId(newProps.articleid);
  }

  render() {
    return (
      <div id="all-comments">
        <div id="input-box">
          <form action="">
            <label id="name1">Comment</label>
            <br />

            <input
              type="text"
              name="Comment"
              id="comment-input"
              placeholder="enter comment"
              value={this.state.input}
              onChange={event => this.inputChange(event.target.value)}
            />

            <button
              className="btn btn-success"
              type="button"
              onClick={() =>
                this.addComment(this.state.input, this.props.articleid)
              }
            >
              Submit
            </button>
          </form>
        </div>
        <ul>
          {this.state.comments.map((comment, i) => {
            return (
              <div key={`${comment._id}`}>
                <Commentid
                  comment={comment}
                  i={i}
                  deleteComment={this.deleteComment}
                />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  getCommentsByArticleId = articleid => {
    fetch(`https://nc-news-jo.herokuapp.com/api/articles/${articleid}/comments`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ comments: res.comments });
      });
  };

  inputChange = newInput => {
    this.setState({ input: newInput });
  };

  addComment = (text, articleid) => {
    axios
      .post(
        `http:///nc-news-jo.herokuapp.com/api/articles/${articleid}/comments`,
        {
          comment: text
        }
      )

      .then(res =>
        this.setState({
          input: "",
          comments: [res.data.comment, ...this.state.comments]
        })
      )

      .catch(error => console.log(error));
  };

  deleteComment = id => {
    const newArr = this.state.comments.filter(comment => {
      return comment._id !== id;
    });
    this.setState({ comments: newArr });
    axios
      .delete(`https://nc-news-jo.herokuapp.com/api/comments/${id}`)
      .then(res => console.log(res));
  };
}

export default Comments;
