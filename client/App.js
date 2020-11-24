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
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: '',
      loginInputBorder: '',
      loginInputName: 'loginInput',
      loginInputPass: 'loginInput',
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

this.handleModalXClick = this.handleModalXClick.bind(this);
  }

  handleModalXClick(e) {
    e.preventDefault();
    this.setState({
      modalState: '',
    })
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

    if(this.state.modalState === '') {
    thisBind.setState({
      loginName: e.target.value
    }, () => {

      axios.post('/attemptLogin',
      `${[thisBind.state.loginName, thisBind.state.loginPass]}`
    )
    .then((res) => {
      console.log(res)
  if(res.data.length > 0 && this.state.loginName !== '') {

    thisBind.setState({
  loginInputName: 'loginInput2',
  loginInputPass: 'loginInput2'
  })
    } else {
      thisBind.setState({
        loginInputName: 'loginInput',
        loginInputPass: 'loginInput',
        loginInputBorder: 'loginInputBorder'
        })
    }
    })

    })
    } else {
      thisBind.setState({
        loginName: e.target.value
    })
}
  }

  handleChangeLogin2 (e) {
    var thisBind = this;
    e.preventDefault();

if(this.state.modalState === '') {

    thisBind.setState({
      loginPass: e.target.value
    }, () => {

      axios.post('/attemptLogin',
      `${[thisBind.state.loginName, thisBind.state.loginPass]}`
    )
    .then((res) => {
      console.log(res)
  if(res.data.length > 0 && this.state.loginName !== '') {

    thisBind.setState({
  loginInputName: 'loginInput2',
  loginInputPass: 'loginInput2'
  })
    } else {
      thisBind.setState({
        loginInputName: 'loginInput',
        loginInputPass: 'loginInput',
        loginInputBorder: 'loginInputBorder'
        })
    }
    })

    })
  } else {
    thisBind.setState({
      loginPass: e.target.value
  })

  }
}

  handleSubmitLogin (e) {
    var thisBind = this;
    e.preventDefault();

    axios.post('/attemptLogin',
    `${[thisBind.state.loginName, thisBind.state.loginPass]}`
  )
  .then((res) => {
    console.log(res)
if(res.data.length > 0 && this.state.loginName !== '') {
thisBind.setState({
  animationName: 'loginAnimation',
})
setTimeout(() => {
  thisBind.setState({
    name: thisBind.state.loginName,
  })
}, 200)
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

    if(this.state.modalState === '') {
      this.setState({
        modalState: 'is-active',
        loginInputName: 'loginInputModal',
        loginInputPass: 'loginInputModal',
      })
    } else {
      if(this.state.loginPass.length < 3) {
        alert('To create an account, enter a unique username and a password that is at least 3 characters long');
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

}

  render() {

    if (this.state.creatingAccount === false) {
    if (this.state.name.length > 0) {
  return (
    <div className='fadeInAnimation'>
    <div className="container background">

      <HashRouter>

        {/* <nav className="nav navBar">
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
        </nav> */}


        <nav className="nav navBar">
          {/* <div className="nav-right nav-menu">
            <div className="nav-item">
              <div className="field is-grouped"> */}

                <p className="control navIconP">
                  <Link to={{
  pathname: '/Home',
  state: {
    name: this.state.name,
    hideNav: this.handleHideNav,
  }
}}>
     <div className='center'>
                    <a id={this.state.hideNav} className="homeButton  buttonBackground">
                    </a>
                    <div className='iconText iconTextHome'>Home</div>
     </div>
<span></span>
                  </Link>
                </p>

                <p className="control navIconP">
                  <Link to={{
  pathname: '/newworkout',
  state: {
    name: this.state.name,
    hideNav: this.handleHideNav,
  }
}}>
   <div className='center'>

                    <a  id={this.state.hideNav} className=" newWorkoutButton">
                    </a>
                    <div className='iconText'>Workout</div>
   </div>
                      <span ></span>
                  </Link>
                </p>


                <p className="control navIconP">
                  <Link to={{
  pathname: '/workoutTemplates',
  state: {
    name: this.state.name,
    hideNav: this.handleHideNav,
  }
}}>
   <div className='center'>

                    <a id={this.state.hideNav} className=" workoutTemplatesButton ">
                    </a>
                    <div className='iconText'>Templates</div>
   </div>
                      <span ></span>
                  </Link>
                </p>

                <p className="control navIconP">
                  <Link to={{
  pathname: '/previousworkouts',
  state: {
    name: this.state.name,
    hideNav: this.handleHideNav,
  }
}}>
   <div className='center'>

                    <a id={this.state.hideNav} className="historyButton  ">
                    </a>
                    <div className='iconText'>History</div>
   </div>
                      <span ></span>
                  </Link>
                </p>

              {/* </div>
            </div>
          </div> */}
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


  <form className='loginForm'>
      <div className="field control">
        <input type="text" onClick={this.handleChangeLogin1} onChange={this.handleChangeLogin1} className={`input is-medium ${this.state.loginInputName} ${this.state.loginInputBorder}`} placeholder="Name"></input>
        <input type="password" onClick={this.handleChangeLogin2} onChange={this.handleChangeLogin2} className={`input is-medium ${this.state.loginInputPass} ${this.state.loginInputBorder}`} placeholder="Password"></input>
      </div>
    </form>


    <div className={`modal ${this.state.modalState}`}>
  <div className="modal-background"></div>
  <div className="modal-content createAccModal">

  <div className='buttonContainerModal'>
      <button onClick={this.handleSubmitCreateAccount}
            href=""
            className="margin button is-large is-dark"
          >
            Create Account
          </button>
          </div>

  <form className='loginFormModal'>
      <div className="field control">
        <input type="text" onClick={this.handleChangeLogin1} onChange={this.handleChangeLogin1} className={`input is-medium ${this.state.loginInputName} `} placeholder="Name"></input>
        <input type="password" onClick={this.handleChangeLogin2} onChange={this.handleChangeLogin2} className={`input is-medium ${this.state.loginInputPass} `} placeholder="Password"></input>
      </div>
    </form>
    <div className='centerMe'>choose a name and password</div>

  </div>
  <button onClick={this.handleModalXClick} className="modal-close is-large" aria-label="close"></button>
</div>



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
