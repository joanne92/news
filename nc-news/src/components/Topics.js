import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import "./Topics.css";

class Topics extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.topics.map(topic => {
            <li>{topic.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Topics;
