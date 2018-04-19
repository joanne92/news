import React, { Component } from "react";
import "./Comments.css";
class Comments extends Component {
  state = {
    comments: []
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
        <form action="">
          Comment:
          <input
            type="text"
            name="Comment"
            id="comment-input"
            placeholder="enter comment"
          />
          <button type="button" className="btn btn-success">
            Submit
          </button>
        </form>
        <ul>
          {this.state.comments.map((comment, i) => {
            return (
              <div key={`${comment._id}`} className="comment">
                <p className="article-body">{comment.body}</p>
                <i className="fa fa-arrow-circle-up" />
                <li className="votes">{comment.votes}</li>
                <i className="fa fa-arrow-circle-down" />
                <li>User:{comment.created_by}</li>
                <li>{comment.created_at}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  getCommentsByArticleId = articleid => {
    console.log(typeof articleid);
    fetch(`https://nc-news-jo.herokuapp.com/api/articles/${articleid}/comments`)
      .then(res => res.json())
      .then(res => this.setState({ comments: res.comments }));
  };
}

export default Comments;
