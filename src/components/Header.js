import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="big-header col-sm-12 offset-lg.12">
        {/* <ul>
          <div>
            <Link to="/" id="nc-header" className="col-lg-4 col-sm-10">
              NC News
            </Link>
          </div>
          <div>
            <Link
              to="/topics"
              id="topics-header"
              className="topic-name col-md-2 col-sm-12"
            >
              Topics
            </Link>
          </div>
          <div>
            <Link
              to="/articles"
              id="articles-header"
              className="topic-name col-md-2 col-sm-12"
            >
              Articles
            </Link>
          </div>
        </ul> */}
        <nav class="navbar navbar-expand-sm">
          <ul class="navbar-nav">
            <div>
              {/* className="col-lg-6 col-md-6 col-xs-12" */}
              <li class="nav-item active">
                <Link to="/" id="nc-header">
                  {"NC News"}
                </Link>
              </li>
            </div>

            <div>
              {/* className="col-lg-2 col-md-2" */}
              <li class="nav-item">
                <Link
                  to="/topics"
                  id="topics-header"
                  className="topic-name col-md-2 col-sm-12"
                >
                  Topics
                </Link>
              </li>
            </div>

            <div>
              {/* className="col-lg-2 col-md-2" */}
              <li class="nav-item">
                <Link
                  to="/articles"
                  id="articles-header"
                  className="topic-name col-md-2 col-sm-12"
                >
                  Articles
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;

// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="menu">
//           <Link
//             to="/"
//             id="nc-header"
//             className="topic-name col-lg-6 col-md-6 col-sm-6 col-xs-6"
//           >
//             {/* //className="col-lg-6 col-md-6 col-sm-6 col-xs-6" */}
//             {"< NC News />"}
//           </Link>
//           <Link to="/topics" id="topics-header" className="topic-name">
//             Topics
//           </Link>
//           <Link to="/articles" id="articles-header" className="topic-name">
//             Articles
//           </Link>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Header;
