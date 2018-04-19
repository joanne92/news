import React, { Component } from "react";
import Header from "../src/components/Header";
import "./App.css";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Comments from "./components/Comments";
// import UserProfile from "./components/User-profile";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    topics: [],
    articles: []
  };

  componentDidMount() {
    this.getAllTopics();
    this.getAllArticles();
  }

  render() {
    return (
      <div className="container">
        <Header />

        <Route
          exact
          path="/"
          render={props => (
            <Articles articles={this.getMostPopular(this.state.articles)} />
          )}
        />

        <Route
          exact
          path="/topics"
          render={props => <Topics topics={this.state.topics} />}
        />

        <Route
          exact
          path="/articles"
          render={props => <Articles articles={this.state.articles} />}
        />

        <Route
          exact
          path="/articles/:topictitle"
          render={props => {
            return (
              <Articles
                articles={this.getArticlesByTopicId(
                  props.match.params.topictitle
                )}
              />
            );
          }}
        />
        <Route
          exact
          path="/articles/:articleid/comments"
          render={props => (
            <Comments {...props} articleid={props.match.params.articleid} />
          )}
        />
      </div>
    );
  }

  getUsers = () => {
    fetch("https://nc-news-jo.herokuapp.com/api/users")
      .then(res => res.json())
      .then(res => this.setState({ users: res.users }));
  };

  getAllTopics = () => {
    fetch("https://nc-news-jo.herokuapp.com/api/topics")
      .then(res => res.json())
      .then(res => this.setState({ topics: res.topics }));
  };

  getAllArticles = () => {
    fetch("https://nc-news-jo.herokuapp.com/api/articles")
      .then(res => res.json())
      .then(res => this.setState({ articles: res.articles }));
  };

  getArticlesByTopicId = topictitle => {
    let topicid;

    this.state.topics.forEach(topic => {
      if (topic.title === topictitle) {
        topicid = topic._id;
      }
    });
    return this.state.articles.filter(article => {
      return article.belongs_to === topicid;
    });
  };

  getMostPopular = arr => {
    return arr
      .sort((a, b) => {
        return b.votes - a.votes;
      })
      .slice(0, 6);
  };
}
export default App;
