import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";
// import newworkout from "./src/components/newworkout";
// import Previousworkouts from "./src/components/previousworkouts";
// import WorkoutTemplates from "./src/components/workoutTemplates";
import Header from "./src/components/header";
// import Home from "./src/components/Home";
import axios from "axios";
import LoginButton from "./src/components/loginButton.js";
import LogoutButton from "./src/components/logoutButton.js";
import Profile from "./src/components/Profile.js";
import Settings from "./src/components/Settings.js";

const Previousworkouts = lazy(() =>
  import("./src/components/previousworkouts")
);
const WorkoutTemplates = lazy(() =>
  import("./src/components/workoutTemplates")
);
const Home = lazy(() => import("./src/components/Home"));
const newworkout = lazy(() => import("./src/components/newworkout"));
const LazyCss = lazy(() => import("./src/components/LazyCss.js"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: "",
      loginInputBorder: "",
      loginInputName: "loginInput",
      loginInputPass: "loginInput",
      animationName: "",
      creatingAccount: false,
      hideNav: "",
      loginName: "",
      loginPass: "",
      name: "",
      loggedIn: false,
      clientId: "",
      picture: "",
      email: "",
      loggingIn: false,
    };
    this.handleChangeLogin1 = this.handleChangeLogin1.bind(this);
    this.handleChangeLogin2 = this.handleChangeLogin2.bind(this);
    // this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleHideNav = this.handleHideNav.bind(this);

    // this.handleSubmitCreateAccount = this.handleSubmitCreateAccount.bind(this);

    this.handleModalXClick = this.handleModalXClick.bind(this);

    this.handleLogIn = this.handleLogIn.bind(this);
    this.getName = this.getName.bind(this);

    this.getPicture = this.getPicture.bind(this);
    this.getEmail = this.getEmail.bind(this);

    this.handleLoggingIn = this.handleLoggingIn.bind(this);

    this.getLoggingIn = this.getLoggingIn.bind(this);
  }

  getLoggingIn() {
    return this.state.loggingIn;
  }

  handleLoggingIn() {
    this.setState(
      {
        loggingIn: true,
      },
      () => {
        console.log(this.state.loggingIn);
      }
    );
  }

  getEmail() {
    return this.state.email;
  }

  getPicture() {
    return this.state.picture;
  }

  getName() {
    return this.state.name;
  }

  handleLogIn(userInfo) {
    var thisBind = this;
    var client = userInfo.sub;

    if (client.toString() === "google-oauth2|108136753024957011595") {
      client = "AUSTIN";
    }
    if (client.toString() === "google-oauth2|117379412326510119969") {
      client = "NATALIE";
    }

    if (userInfo.email == "CulNatalie@yahoo.com") {
      client = "NATALIE";
    }

    this.setState(
      {
        loggingIn: true,
        loggedIn: true,
        clientId: client,
        name: client,
        picture: userInfo.picture,
        email: userInfo.email,
      },
      () => {
        axios.post("/createAccount", `${[thisBind.state.name, ""]}`).then(
          (res) => {
            console.log("account created");
            // if (res.data === "0") {
            //   if (thisBind.state.loginName === "") {
            //     alert("Please enter a username and password");
            //   } else {
            //     alert("Username is taken");
            //   }
            // }
            // if (typeof res.data === "object") {
            //   console.log("account created, logging in");
            //   thisBind.setState({
            //     creatingAccount: true,
            //   });

            //   setTimeout(() => {
            //     thisBind.setState({
            //       name: thisBind.state.loginName,
            //       creatingAccount: false,
            //     });
            //   }, 2000);
            // }
          },
          (error) => {
            alert(error);
          }
        );
      }
    );
  }

  handleModalXClick(e) {
    e.preventDefault();
    this.setState({
      modalState: "",
    });
  }

  componentDidMount() {
    // this.setState({ isLoading: false });
  }

  handleHideNav() {
    if (this.state.hideNav === "") {
      this.setState({
        hideNav: "hide",
      });
    } else {
      this.setState({
        hideNav: "",
      });
    }
  }

  handleChangeLogin1(e) {
    var thisBind = this;
    e.preventDefault();

    if (this.state.modalState === "") {
      thisBind.setState(
        {
          loginName: e.target.value,
        },
        () => {
          axios
            .post(
              "/attemptLogin",
              `${[thisBind.state.loginName, thisBind.state.loginPass]}`
            )
            .then((res) => {
              if (res.data.length > 0 && this.state.loginName !== "") {
                thisBind.setState({
                  loginInputName: "loginInput2",
                  loginInputPass: "loginInput2",
                });
              } else {
                thisBind.setState({
                  loginInputName: "loginInput",
                  loginInputPass: "loginInput",
                  loginInputBorder: "loginInputBorder",
                });
              }
            });
        }
      );
    } else {
      thisBind.setState({
        loginName: e.target.value,
      });
    }
  }

  handleChangeLogin2(e) {
    var thisBind = this;
    e.preventDefault();

    if (this.state.modalState === "") {
      thisBind.setState(
        {
          loginPass: e.target.value,
        },
        () => {
          axios
            .post(
              "/attemptLogin",
              `${[thisBind.state.loginName, thisBind.state.loginPass]}`
            )
            .then((res) => {
              if (res.data.length > 0 && this.state.loginName !== "") {
                thisBind.setState({
                  loginInputName: "loginInput2",
                  loginInputPass: "loginInput2",
                });
              } else {
                thisBind.setState({
                  loginInputName: "loginInput",
                  loginInputPass: "loginInput",
                  loginInputBorder: "loginInputBorder",
                });
              }
            });
        }
      );
    } else {
      thisBind.setState({
        loginPass: e.target.value,
      });
    }
  }

  handleSubmitCreateAccount(e) {
    var thisBind = this;
    e.preventDefault();

    if (this.state.modalState === "") {
      this.setState({
        modalState: "is-active",
        loginInputName: "loginInputModal",
        loginInputPass: "loginInputModal",
      });
    } else {
      if (this.state.loginPass.length < 3) {
        alert(
          "To create an account, enter a unique username and a password that is at least 3 characters long"
        );
      } else {
        axios
          .post(
            "/createAccount",
            `${[thisBind.state.loginName, thisBind.state.loginPass]}`
          )
          .then(
            (res) => {
              if (res.data === "0") {
                if (thisBind.state.loginName === "") {
                  alert("Please enter a username and password");
                } else {
                  alert("Username is taken");
                }
              }
              if (typeof res.data === "object") {
                console.log("account created, logging in");
                thisBind.setState({
                  creatingAccount: true,
                });

                setTimeout(() => {
                  thisBind.setState({
                    name: thisBind.state.loginName,
                    creatingAccount: false,
                  });
                }, 2000);
              }
            },
            (error) => {
              alert(error);
            }
          );
      }
    }
  }

  render() {
    if (!this.state.loggedIn && !this.state.loggingIn) {
      return (
        <React.Fragment>
          <LoginButton loggingIn={this.getLoggingIn} />
          <Profile logIn={this.handleLogIn} loggingIn={this.handleLoggingIn} />
        </React.Fragment>
      );
    } else {
      if (this.state.creatingAccount === false) {
        return (
          <Suspense fallback={<div id="hide"></div>}>
            <div className="fadeInAnimation">
              {/* <Header /> */}
              <div className="container">
                <HashRouter>
                  <nav className="nav navBar">
                    <p className="control navIconP">
                      <Link
                        to={{
                          pathname: "/Home",
                          state: {
                            // name: this.state.name,
                            getName: this.getName,
                            hideNav: this.handleHideNav,
                          },
                        }}
                      >
                        <div className="center">
                          <a
                            id={this.state.hideNav}
                            className="homeButton  buttonBackground"
                          ></a>
                          <div className="iconText iconTextHome">Home</div>
                        </div>
                        <span></span>
                      </Link>
                    </p>

                    <p className="control navIconP">
                      <Link
                        to={{
                          pathname: "/newworkout",
                          state: {
                            name: this.state.name,
                            getName: this.getName,
                            hideNav: this.handleHideNav,
                          },
                        }}
                      >
                        <div className="center">
                          <a
                            id={this.state.hideNav}
                            className=" newWorkoutButton"
                          ></a>
                          <div className="iconText">Workout</div>
                        </div>
                        <span></span>
                      </Link>
                    </p>

                    <p className="control navIconP">
                      <Link
                        to={{
                          pathname: "/workoutTemplates",
                          state: {
                            getName: this.getName,
                            // name: this.state.name,
                            hideNav: this.handleHideNav,
                          },
                        }}
                      >
                        <div className="center">
                          <a
                            id={this.state.hideNav}
                            className=" workoutTemplatesButton "
                          ></a>
                          <div className="iconText">Templates</div>
                        </div>
                        <span></span>
                      </Link>
                    </p>

                    <p className="control navIconP">
                      <Link
                        to={{
                          pathname: "/previousworkouts",
                          state: {
                            getName: this.getName,
                            // name: this.state.name,
                            hideNav: this.handleHideNav,
                          },
                        }}
                      >
                        <div className="center">
                          <a
                            id={this.state.hideNav}
                            className="historyButton  "
                          ></a>
                          <div className="iconText">History</div>
                        </div>
                        <span></span>
                      </Link>
                    </p>

                    <p className="control navIconP">
                      <Link
                        to={{
                          pathname: "/settings",
                          state: {
                            getName: this.getName,
                            getPicture: this.getPicture,
                            // name: this.state.name,
                            hideNav: this.handleHideNav,
                            getEmail: this.getEmail,
                          },
                        }}
                      >
                        <div className="center">
                          <i
                            id={this.state.hideNav}
                            className="settingsCogNavbar fa fa-cog fa-2x"
                          ></i>
                          <div className="iconText">Settings</div>
                        </div>
                      </Link>
                    </p>
                  </nav>

                  <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Home" component={Home} />
                    <Route path="/newworkout" component={newworkout} />
                    <Route path="/settings" component={Settings} />
                    <Route
                      path="/workoutTemplates"
                      component={WorkoutTemplates}
                    />
                    <Route
                      path="/previousworkouts"
                      component={Previousworkouts}
                    />
                  </div>
                </HashRouter>
              </div>
            </div>
          </Suspense>
        );
      } else {
        return (
          <div>hello</div>
          // <React.Fragment>
          //   <div className="meterContainer">
          //     <div className="meter">
          //       <span className="progress"></span>
          //     </div>
          //   </div>
          //   <div className="creatingAccountWords">Creating Account...</div>
          // </React.Fragment>
        );
      }
    }
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;
