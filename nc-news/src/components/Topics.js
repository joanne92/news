import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import "./Topics.css";

class Topics extends Component {
  render() {
    return (
      <div>
        {this.props.topics.map((topic, i) => {
          return (
            <div key={`${i}${topic}`}>
              <p>{topic.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Topics;
