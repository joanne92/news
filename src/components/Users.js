import React, { Component } from "react";
import UserProfile from "./UserProfile";

class Users extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="user-container">
        {this.state.users.map((user, i) => {
          if (user._id === this.props.userid) {
            return (
              <div key={`${user._id}`}>
                <UserProfile
                  username={user.username}
                  articles={this.props.articles}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }

  getUsers = () => {
    fetch("https://nc-news-jo.herokuapp.com/api/users")
      .then(res => res.json())
      .then(res => this.setState({ users: res.users }));
  };
}

export default Users;
