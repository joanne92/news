import React, { Component } from "react";

import { Link } from "react-router-dom";

class Topics extends Component {
  render() {
    return (
      <div>
        {this.props.topics.map((topic, i) => {
          return (
            <div key={`${i}${topic}`}>
              <Link to={`/articles/${topic.title}`} className="link">
                {topic.title}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Topics;
