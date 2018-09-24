import React, { Component } from "react";
import "./Topics.css";
import { Link } from "react-router-dom";

class Topics extends Component {
  render() {
    return (
      <div className="grid-topics">
        <ul>
          {this.props.topics.map((topic, i) => {
            return (
              <div key={`${i}${topic}`} className="topic">
                <Link to={`/articles/${topic.title}`} className="topic-title">
                  {topic.title}
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Topics;
