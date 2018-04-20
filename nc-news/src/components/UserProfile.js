import React, { Component } from "react";
import "./UserProfile.css";

class UserProfile extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    this.getUser();
  }
  render() {
    const { user } = this.state;
    const { articles } = this.props;
    console.log(articles[0]);

    return (
      <div id="userProfile">
        <li className="name">Name: {user.name}</li>
        <li className="name">UserName: {user.username}</li>
        <img src={`${user.avatar_url}`} id="profile-pic" />
        <ul>
          {articles.map(article => {
            return (
              <li key={`${article._id}`} className="article-title">
                {article.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  getUser = () => {
    fetch(`https://nc-news-jo.herokuapp.com/api/users/${this.props.username}`)
      .then(res => res.json())
      .then(res => this.setState({ user: res.user[0] }));
  };
}

export default UserProfile;
