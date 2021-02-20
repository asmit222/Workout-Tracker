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
    };
    this.handleChangeLogin1 = this.handleChangeLogin1.bind(this);
    this.handleChangeLogin2 = this.handleChangeLogin2.bind(this);
    // this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleHideNav = this.handleHideNav.bind(this);

    // this.handleSubmitCreateAccount = this.handleSubmitCreateAccount.bind(this);

    this.handleModalXClick = this.handleModalXClick.bind(this);

    this.handleLogIn = this.handleLogIn.bind(this);
    this.getName = this.getName.bind(this);
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

    if (userInfo.email === "CulNatalie@yahoo.com") {
      client = "NATALIE";
    }
    if (userInfo.email === "asmit2222@gmail.com") {
      client = "AUSTIN";
    }

    this.setState(
      {
        loggedIn: true,
        clientId: client,
        name: client,
      },
      () => {
        console.log("userInfo: ", userInfo, "name: ", this.state.name);

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
              console.log(res);
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
              console.log(res);
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

  // handleSubmitLogin(e) {
  //   var thisBind = this;
  //   e.preventDefault();

  //   axios
  //     .post(
  //       "/attemptLogin",
  //       `${[thisBind.state.loginName, thisBind.state.loginPass]}`
  //     )
  //     .then(
  //       (res) => {
  //         console.log(res);
  //         if (res.data.length > 0 && this.state.loginName !== "") {
  //           thisBind.setState({
  //             animationName: "loginAnimation",
  //           });
  //           setTimeout(() => {
  //             thisBind.setState({
  //               name: thisBind.state.loginName,
  //             });
  //           }, 200);
  //         } else {
  //           alert("invalid username or password");
  //         }
  //       },
  //       (error) => {
  //         alert(error);
  //       }
  //     );
  // }

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
    if (!this.state.loggedIn) {
      return (
        <React.Fragment>
          <LoginButton className="logInButtonApp button is-info" />
          <Profile logIn={this.handleLogIn} />
        </React.Fragment>
      );
    } else {
      if (this.state.creatingAccount === false) {
        return (
          <Suspense fallback={<div id="hide"></div>}>
            <div className="fadeInAnimation">
              {/* <Header /> */}
              <div className="container">
                {/* ============================================ settings modal ============================================= */}
                {/*
                  <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="settingsModalCard modal-card">
                      <header className="modal-card-head">
                        <p className="modal-card-title">Settings</p>
                        <button className="delete" aria-label="close"></button>
                      </header>
                      <section className="modal-card-body"></section>
                      <footer className="modal-card-foot">
                        <button className="button is-success">
                          Save changes
                        </button>
                        <button className="button">Cancel</button>
                      </footer>
                    </div>
                  </div> */}

                {/* ============================================================================================================== */}

                <HashRouter>
                  <nav className="nav navBar">
                    <p className="control navIconP">
                      <Link
                        to={{
                          pathname: "/Home",
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
                            name: this.state.name,
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
                            name: this.state.name,
                            hideNav: this.handleHideNav,
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
