import React, { Component } from "react";
import "./Comments.css";
import axios from "axios";

import Commentid from "./Commentid";

class Comments extends Component {
  state = {
    comments: [],
    input: "",
    users: []
  };
  componentDidMount() {
    this.getCommentsByArticleId(this.props.articleid);
    this.getAllUsers();
  }

  componentWillReceiveProps(newProps) {
    this.getCommentsByArticleId(newProps.articleid);
  }

  render() {
    return (
      <div id="all-comments">
        <div id="input-box">
          <form>
            <label id="input-comment">Leave a Comment!</label>
            <br />
            <div>
              <input
                type="text"
                name="comment"
                className="col-sm-8"
                id="comment-input"
                value={this.state.input}
                onChange={event => this.inputChange(event.target.value)}
              />
            </div>

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
        <div className="all-articles">
          <ul>
            {this.state.comments.map((comment, i) => {
              return (
                <div key={`${comment._id}`}>
                  <Commentid
                    comment={comment}
                    i={i}
                    deleteComment={this.deleteComment}
                    users={this.state.users}
                  />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  getCommentsByArticleId = articleid => {
    fetch(`https://nc-news-jo.herokuapp.com/api/articles/${articleid}/comments`)
      .then(res => res.json())
      .then(res => {
        this.setState({ comments: res.comments });
      });
  };

  inputChange = newInput => {
    this.setState({ input: newInput });
  };

  addComment = (text, articleid) => {
    axios
      .post(
        `https://nc-news-jo.herokuapp.com/api/articles/${articleid}/comments`,
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

  getAllUsers = () => {
    fetch("https://nc-news-jo.herokuapp.com/api/users")
      .then(res => res.json())
      .then(res => this.setState({ users: res.users }));
  };
}

export default Comments;
