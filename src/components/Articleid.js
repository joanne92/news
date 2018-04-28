import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Articlesid.css";

class Articleid extends Component {
  state = {
    votes: this.props.article.votes,
    userName: ""
  };
  // componentDidMount() {
  //   this.getUsersName(this.props.article);
  // }

  // componentWillReceiveProps(newProps) {
  //   this.getUsersName(newProps.article);
  //   this.setState({});
  // }

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
            className="fa fa-arrow-circle-up"
            onClick={() => this.voteUp(article._id)}
          />
          <li className="votes">{this.state.votes}</li>
          <i
            className="fa fa-arrow-circle-down"
            onClick={() => this.voteDown(article._id)}
          />
          <li>Comments: {article.comments}</li>
          <Link to={`/users/${article.created_by}`} className="article-user">
            {/* User: {this.state.userName} */}
            <i className="fas fa-user" />
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

  // getUsersName = article => {
  //   this.props.users.filter(user => {
  //     if (user._id === article.created_by) {
  //       return this.setState({ userName: user.name });
  //     }
  //   });
  // };
}

export default Articleid;
