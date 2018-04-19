import React, { Component } from "react";

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
    console.log("RENDERED");
    return (
      <div className="all-comments">
        <ul>
          {this.state.comments.map((comment, i) => {
            return (
              <div key={`${comment._id}`} className="comment">
                <p>{i + 1}.)</p>
                <p className="article-body">{comment.body}</p>
                <li>Votes: {comment.votes}</li>
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
