import React, { Component } from "react";
import axios from "axios";

import LogoutButton from "./logoutButton.js";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PRModalActive: "",
      exercise: "",
      weight: "",
      reps: "",
      PRdata: [],
    };
    this.handleChangeExercise = this.handleChangeExercise.bind(this);
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleChangeReps = this.handleChangeReps.bind(this);
    this.handleActivePrModal = this.handleActivePrModal.bind(this);

    this.handleSavePR = this.handleSavePR.bind(this);
  }

  handleSavePR() {
    var user = this.props.location.state.getName();

    if (user.toString() === "google-oauth2|108136753024957011595") {
      user = "AUSTIN";
    }
    if (user.toString() === "google-oauth2|117379412326510119969") {
      user = "NATALIE";
    }

    if (this.props.location.state.getEmail() == "CulNatalie@yahoo.com") {
      user = "NATALIE";
    }

    var obj = {
      name: user,
      exercise: this.state.exercise,
      weight: this.state.weight,
      reps: this.state.reps,
    };

    axios.post("/savePR", obj).then(
      (response) => {
        console.log("PR saved!");
        axios.post("/getPRs", `${[user]}`).then(
          (response) => {
            this.setState(
              {
                PRdata: response.data,
              },
              () => {
                console.log(this.state.PRdata);
              }
            );
            this.handleActivePrModal();
          },
          (error) => {
            alert(error);
          }
        );
      },
      (error) => {
        alert(error);
      }
    );
  }

  handleActivePrModal() {
    if (this.state.PRModalActive === "") {
      this.setState({
        PRModalActive: "is-active",
        exercise: "",
        weight: "",
        reps: "",
      });
    } else {
      this.setState({
        PRModalActive: "",
        exercise: "",
        weight: "",
        reps: "",
      });
    }
  }

  handleChangeExercise(e) {
    console.log(e.target.value);
    this.setState({
      exercise: e.target.value,
    });
  }

  handleChangeWeight(e) {
    console.log(e.target.value);
    this.setState({
      weight: e.target.value,
    });
  }

  handleChangeReps(e) {
    console.log(e.target.value);
    this.setState({
      reps: e.target.value,
    });
  }

  componentDidMount() {
    if (!this.props.location.state) {
      this.props.history.push("/Home");
    } else {
      var user = this.props.location.state.getName();

      if (user.toString() === "google-oauth2|108136753024957011595") {
        user = "AUSTIN";
      }
      if (user.toString() === "google-oauth2|117379412326510119969") {
        user = "NATALIE";
      }

      if (this.props.location.state.getEmail() == "CulNatalie@yahoo.com") {
        user = "NATALIE";
      }

      axios.post("/getPRs", `${[user]}`).then(
        (response) => {
          this.setState(
            {
              PRdata: response.data,
            },
            () => {
              console.log(this.state.PRdata);
            }
          );
        },
        (error) => {
          alert(error);
        }
      );
    }
  }

  render() {
    if (this.props.location.state) {
      return (
        <div className="settingsContainer">
          <div className="picWrapper">
            <img
              className="profilePic"
              src={this.props.location.state.getPicture()}
              alt={this.props.location.state.getName()}
            />
            <div id="hide"> </div>
          </div>

          <div className="settingsEmail">
            {this.props.location.state.getEmail()}
          </div>

          <div className="horizontalDivider"></div>

          <div className="PRsWrapper forwardInAnimation">
            <div className="table-container PRsTableContainer">
              <table className="table is-bordered is-striped">
                <thead className="theadpersonalrecords">Personal Records</thead>
                <tbody>
                  <tr>
                    <th>Exercise</th>
                    <th>Weight</th>
                    <th>Reps</th>
                  </tr>
                  {this.state.PRdata.map((row) => {
                    return (
                      <tr>
                        <td>{row.exercise}</td>
                        <td>{row.weight}</td>
                        <td>{row.reps}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="buttonContainerAddPR">
              <button
                onClick={this.handleActivePrModal}
                className="button is-success addPRButton"
              >
                Add PR
              </button>
            </div>
          </div>

          <div className="logOutButtonAppWrapper">
            <LogoutButton />
          </div>

          <div className={`modal ${this.state.PRModalActive}`}>
            <div className="modal-background"></div>
            <div className="modal-card PRModal forwardInAnimation">
              <header className="modal-card-head">
                <p className="modal-card-title">New PR</p>
              </header>
              <section className="modal-card-body ">
                <div className="prTagDiv">
                  <span className="prTag">Exercise</span>
                  <span>
                    <input
                      value={this.state.exercise}
                      onChange={this.handleChangeExercise}
                    ></input>
                  </span>
                </div>
                <div className="prTagDiv">
                  <span className="prTag">Weight</span>
                  <span>
                    <input
                      value={this.state.weight}
                      onChange={this.handleChangeWeight}
                    ></input>
                  </span>
                </div>
                <div className="prTagDiv">
                  <span className="prTag">Reps</span>
                  <span>
                    <input
                      value={this.state.reps}
                      onChange={this.handleChangeReps}
                    ></input>
                  </span>
                </div>
              </section>
              <footer className="modal-card-foot">
                <button
                  onClick={this.handleSavePR}
                  className="button is-success"
                >
                  Save PR
                </button>
                <button onClick={this.handleActivePrModal} className="button">
                  Cancel
                </button>
              </footer>
            </div>
          </div>
        </div>
      );
    } else {
      return <div id="hide"></div>;
    }
  }
}

export default Settings;
