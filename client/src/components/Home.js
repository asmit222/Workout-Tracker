import React, { Component } from "react";
import App from "../../App";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import Previousworkouts from "./previousworkouts";

class Home extends Component {
  render() {
    return (
      <div className="bg-img">

        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title"></h1>
              <h2 className="subtitle"></h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
