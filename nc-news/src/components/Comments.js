import React, { Component } from "react";

//import "./Articles.css";

class Comments extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-12 comments">
          <ul>
            <li>Comment 1</li>
            <li>Comment 2</li>
            <li>Comment 3</li>
            <li>Comment 4</li>
            <li>Comment 5</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;
