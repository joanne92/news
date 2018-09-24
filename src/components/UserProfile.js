import React, { Component } from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";

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
      <div className="grid-container">
        <div className="avatar-img">
          {/* {"picture"}  */}
          <div>
            <img src={`${user.avatar_url}`} className="profile-pic" />
          </div>
          <div className="user-details">
            <div className="name">
              Name: <span className="nameX">{user.name}</span>
            </div>
            <div className="name">
              UserName: <span className="nameX">{user.username}</span>
            </div>
          </div>
        </div>
        <div className="bottom-row">
          <div className="title-list-container">
            <p className="article-header">Articles by {user.name}</p>
            <div className="title-list">
              <ul>
                {articles.map(article => {
                  return (
                    <Link
                      to={`/articles/${article._id}/comments`}
                      className="single"
                    >
                      <li key={`${article._id}`}>{article.title}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
    // <div id="userProfile" className="container">
    //   <div className="row">
    //     <div className="user-info col-lg-4 col-md-12 col-sm-12">
    //       <img src={`${user.avatar_url}`} id="profile-pic" />
    //       <ul>
    //         <li className="name">Name: {user.name}</li>
    //         <li className="name">UserName: {user.username}</li>
    //       </ul>
    //     </div>

    //     <div className="user-titles-list col-lg-7 col-md-11 col-sm-11">
    //       <p>Articles by {user.name}</p>
    //       <ul>
    //         {articles.map(article => {
    //           return (
    //             <Link
    //               to={`/articles/${article._id}/comments`}
    //               className="article-title"
    //             >
    //               <li key={`${article._id}`} className="article-title single">
    //                 {article.title}
    //               </li>
    //             </Link>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  }
  getUser = () => {
    fetch(`https://nc-news-jo.herokuapp.com/api/users/${this.props.username}`)
      .then(res => res.json())
      .then(res => this.setState({ user: res.user[0] }));
  };
}

export default UserProfile;
