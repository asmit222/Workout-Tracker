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
import App from "./App";
import $ from 'jquery';
import axios from 'axios';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animationName: '',
      loginName: '',
      loginPass: '',
      name: ' '
    }
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleChangeLogin1 = this.handleChangeLogin1.bind(this);
this.handleChangeLogin2 = this.handleChangeLogin2.bind(this);
  }

  handleChangeLogin1 (e) {
    var thisBind = this;
    e.preventDefault();
    thisBind.setState({
      loginName: e.target.value
    })
  }

  handleChangeLogin2 (e) {
    var thisBind = this;
    e.preventDefault();
    thisBind.setState({
      loginPass: e.target.value
    })
  }

  handleSubmitLogin (e) {

    var thisBind = this;
    e.preventDefault();

    axios.post('/userAndPassChecker',
    `${[
      this.state.loginName,
      this.state.loginPass
    ]}`
  )
  .then((response) => {
    thisBind.setState({
      animationName: 'loginAnimation'
    })
    setTimeout(() => {
      thisBind.setState({
        name: response.data,
       });
       thisBind.props.history.push('/Home');
    }, 1000)

  }, (error) => {
    alert(error);
  });


  }

  render(props) {
    return (
      <div className={this.state.animationName}>
      <div className='buttonContainer'>
      <button onClick={this.handleSubmitLogin} id='loginButton'
            href=""
            className="margin button is-info is-large"
          >
            Log in
          </button>
          </div>
  <form id='loginForm'>
      <div className="field control">
        <input type="text" onChange={this.handleChangeLogin1} className="input is-medium loginInput" placeholder="Name"></input>
        <input type="password" onChange={this.handleChangeLogin2} className="input is-medium loginInput" placeholder="Password"></input>
      </div>
    </form>
    </div>
    );
  }

}


export default Login;
