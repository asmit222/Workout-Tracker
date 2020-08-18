import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
} from "react-router-dom";
import newworkout from "./src/components/newworkout";
import Previousworkouts from "./src/components/previousworkouts";
import Home from "./src/components/Home";

export default function App() {
  return (
    <div className="container">
      <HashRouter>
        <nav className="nav">
          <div className="nav-right nav-menu">
            <div className="nav-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link to="/Home">
                    <a className="button marginbottom is-dark">
                      <span>Home</span>
                    </a>
                  </Link>
                </p>
                <p className="control">
                  <Link to="/newworkout">
                    <a className="button marginbottom is-success">
                      <span>New workout</span>
                    </a>
                  </Link>
                </p>
                <p className="control">
                  <Link to="previousworkouts">
                    <a className="button marginbottom is-info">
                      <span>Previous workouts</span>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div className="content">
          <Route exact path="/Home" component={Home} />
          <Route path="/newworkout" component={newworkout} />
          <Route path="/previousworkouts" component={Previousworkouts} />
        </div>
      </HashRouter>
    </div>
  );
}
