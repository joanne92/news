import React, { Component } from "react";
import Header from "../src/components/Header";
import "./App.css";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Comments from "./components/Comments";
import UserProfile from "./components/User-profile";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    this.getTopics();
  }
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <Header />
        <Route exact path="/" render={props => <Articles />} />
        <Route
          exact
          path="/topics"
          render={props => <Topics topics={this.state.topics} />}
        />
        <Route exact path="/articles" render={props => <Articles />} />
        <Route exact path="/comments" render={props => <Comments />} />
      </div>
    );
  }

  getTopics = () => {
    fetch("https://nc-news-jo.herokuapp.com/api/topics")
      .then(res => res.json())
      .then(res => this.setState({ topics: res.topics }));
  };
}

export default App;
