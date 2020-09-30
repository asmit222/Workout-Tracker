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
import WorkoutTemplates from "./src/components/workoutTemplates";
import Home from "./src/components/Home";
import Login from "./Login";
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationName: '',
      creatingAccount: false,
      hideNav: '',
      loginName: '',
      loginPass: '',
     name: '',
    };
this.handleChangeLogin1 = this.handleChangeLogin1.bind(this);
this.handleChangeLogin2 = this.handleChangeLogin2.bind(this);
this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
this.handleHideNav = this.handleHideNav.bind(this);

this.handleSubmitCreateAccount = this.handleSubmitCreateAccount.bind(this);
  }

componentDidMount() {
  this.setState({isLoading: false})

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

    axios.post('/attemptLogin',
    `${[thisBind.state.loginName, thisBind.state.loginPass]}`
  )
  .then((res) => {
if(res.data.length > 0) {
thisBind.setState({
  animationName: 'loginAnimation'
})
setTimeout(() => {
  thisBind.setState({
    name: thisBind.state.loginName,
  })
}, 500)


} else {
  alert('invalid username or password');
}
  }, (error) => {
    alert(error);
  });
  }

  handleSubmitCreateAccount(e) {
    var thisBind = this;
    e.preventDefault();

if(this.state.loginPass.length < 3) {
  alert('Please choose a password that is at least 3 characters long');
} else {

    axios.post('/createAccount',
    `${[thisBind.state.loginName, thisBind.state.loginPass]}`
  )
  .then((res) => {
if (res.data === '0') {
  if(thisBind.state.loginName === '') {
alert('Please enter a username and password')
  } else {
    alert('Username is taken');
  }
}
if(typeof res.data === 'object') {
  console.log('account created, logging in')
  thisBind.setState({
    creatingAccount: true,
  })

  setTimeout(() => {
    thisBind.setState({
      name: thisBind.state.loginName,
      creatingAccount: false,
    })
  }, 2000);




}
  }, (error) => {
    alert(error);
  });
  }
}

  render() {

    if (this.state.creatingAccount === false) {
    if (this.state.name.length > 0) {
  return (
    <div className='fadeInAnimation'>
    <div className="container background">

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
    hideNav: this.handleHideNav,
  }
}}>
                    <a id={this.state.hideNav} className="homeButton button marginbottom buttonBackground">
<span></span>
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
                    <a  id={this.state.hideNav} className="button marginbottom newWorkoutButton">
                      <span ></span>
                    </a>
                  </Link>
                </p>


                <p className="control">
                  <Link to={{
  pathname: '/workoutTemplates',
  state: {
    name: this.state.name,
    hideNav: this.handleHideNav,
  }
}}>
                    <a id={this.state.hideNav} className="button marginbottom workoutTemplatesButton ">
                      <span ></span>
                    </a>
                  </Link>
                </p>
                <p className="control">
                  <Link to={{
  pathname: '/previousworkouts',
  state: {
    name: this.state.name,
    hideNav: this.handleHideNav,
  }
}}>
                    <a id={this.state.hideNav} className="historyButton button marginbottom ">
                      <span ></span>
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
          <Route path="/workoutTemplates" component={WorkoutTemplates} />
          <Route path="/previousworkouts" component={Previousworkouts} />
        </div>



      </HashRouter>
     </div>
    </div>
   );
  } else {
    return (
      <div className={this.state.animationName}>
      <div className='loginBackground'>
      <div className='buttonContainer'>
      <button onClick={this.handleSubmitLogin} id='loginButton'
            href=""
            className="margin button is-info is-large"
          >
            Log in
          </button>
          </div>

          <div className='or'>or</div>

          <div className='buttonContainer2'>
      <button onClick={this.handleSubmitCreateAccount}
            href=""
            className="margin button is-dark"
          >
            Create Account
          </button>
          </div>

  <form id='loginForm'>
      <div className="field control">
        <input type="text" onChange={this.handleChangeLogin1} className="input is-medium loginInput" placeholder="Name"></input>
        <input type="password" onChange={this.handleChangeLogin2} className="input is-medium loginInput" placeholder="Password"></input>
      </div>
    </form>


    </div>
    </div>
    )
  }
} else {
  return (
    <React.Fragment>
    <div className='meterContainer'>
    <div className="meter">
    <span className="progress"></span>
</div>
</div>
<div className='creatingAccountWords'>Creating Account...</div>
</React.Fragment>
  )
}
 }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;
