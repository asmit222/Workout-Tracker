import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import newworkout from "./src/components/newworkout";
import Previousworkouts from "./src/components/previousworkouts";
import Home from "./src/components/Home";
import Login from "./Login";
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideNav: '',
      loginName: '',
      loginPass: '',
     name: '',
    };
this.handleChangeLogin1 = this.handleChangeLogin1.bind(this);
this.handleChangeLogin2 = this.handleChangeLogin2.bind(this);
this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
this.handleHideNav = this.handleHideNav.bind(this);
  }

  handleHideNav () {
    if(this.state.hideNav === '') {
    this.setState({
      hideNav: 'hide',
    })
  } else {
    this.setState({
      hideNav: '',
    })
  }
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

    if (this.state.loginName.toUpperCase() === 'AUSTIN' && this.state.loginPass === 'pw') {
      this.setState({
        name: 'AUSTIN',
      })
    } else if (this.state.loginName.toUpperCase() === 'NATALIE' && this.state.loginPass === 'godnr17247') {
      this.setState({
        name: 'NATALIE',
      })
    } else {
      alert('invalid username or password');
    }


  }

  render() {
    if (this.state.name.length > 0) {
  return (
    <div className="container">
      <HashRouter>
        <nav className="nav">
          <div className="nav-right nav-menu">
            <div className="nav-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link to={{
  pathname: '/Home',
  state: {
    name: this.state.name,
  }
}}>
                    <a id={this.state.hideNav} className="button marginbottom is-dark">
                      <span >Home</span>
                    </a>
                  </Link>
                </p>
                <p className="control">
                  <Link to={{
  pathname: '/newworkout',
  state: {
    name: this.state.name,
    hideNav: this.handleHideNav,
  }
}}>
                    <a id={this.state.hideNav} className="button marginbottom is-success">
                      <span >New Workout</span>
                    </a>
                  </Link>
                </p>
                <p className="control">
                  <Link to={{
  pathname: '/previousworkouts',
  state: {
    name: this.state.name,
  }
}}>
                    <a id={this.state.hideNav} className="button marginbottom is-info">
                      <span >Workout History</span>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div className="content">
        <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route path="/newworkout" component={newworkout} />
          <Route path="/previousworkouts" component={Previousworkouts} />
        </div>
      </HashRouter>
    </div>
   );
  } else {
    return (
      <div>
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
    )
  }
 }
}

export default App;
