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
      rowModalActive: "",
      currentRow: {},
      updatingRow: {},
      oldPRRow: {},
      username: "",
      currentIndex: 999999,
    };
    this.handleChangeExercise = this.handleChangeExercise.bind(this);
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleChangeReps = this.handleChangeReps.bind(this);
    this.handleActivePrModal = this.handleActivePrModal.bind(this);
    this.handleChangeUpdatingRowWeight =
      this.handleChangeUpdatingRowWeight.bind(this);
    this.handleChangeUpdatingRowReps =
      this.handleChangeUpdatingRowReps.bind(this);

    this.handleSavePR = this.handleSavePR.bind(this);

    this.handleClickPRRow = this.handleClickPRRow.bind(this);
    this.handleCancelPRModal = this.handleCancelPRModal.bind(this);

    this.handleDeletePR = this.handleDeletePR.bind(this);

    this.handleSaveChanges = this.handleSaveChanges.bind(this);
  }

  handleSaveChanges() {
    axios.post("/updatePR", this.state.updatingRow).then(
      (response) => {
        this.handleCancelPRModal();
      },
      (error) => {
        alert(error);
      }
    );
  }

  handleDeletePR() {
    axios.post("/deletePR", this.state.currentIndex).then(
      (response) => {
        this.handleCancelPRModal();
      },
      (error) => {
        alert(error);
      }
    );
  }

  handleCancelPRModal() {
    this.setState(
      {
        currentRow: {},
        rowModalActive: this.state.rowModalActive === "" ? "is-active" : "",
      },
      () => {
        axios.post("/getPRs", `${[this.state.username]}`).then(
          (response) => {
            var reversed = response.data.reverse();
            this.setState(
              {
                PRdata: reversed,
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
    );
  }

  handleClickPRRow(row) {
    this.setState({
      currentIndex: row.id,
      oldPRRow: row,
      updatingRow: row,
      currentRow: row,
      rowModalActive: this.state.rowModalActive === "" ? "is-active" : "",
    });
  }

  handleChangeUpdatingRowWeight(e) {
    var oldRow = this.state.updatingRow;

    oldRow.weight = e.target.value;

    this.setState(
      {
        updatingRow: oldRow,
      },
      () => console.log(this.state.updatingRow, this.state.currentIndex)
    );
  }

  handleChangeUpdatingRowReps(e) {
    var oldRow = this.state.updatingRow;

    oldRow.reps = e.target.value;

    this.setState(
      {
        updatingRow: oldRow,
      },
      () => console.log(this.state.updatingRow)
    );
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
        axios.post("/getPRs", `${[user]}`).then(
          (response) => {
            var reversed = response.data.reverse();
            this.setState({
              PRdata: reversed,
            });
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
      this.setState({
        username: user,
      });

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
          var reversed = response.data.reverse();
          this.setState(
            {
              PRdata: reversed,
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
          <div className="stickyTopBox">
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
              <div className="theadpersonalrecords">
                Personal Records{" "}
                <button
                  onClick={this.handleActivePrModal}
                  className="button is-success addPRButton is-small"
                >
                  Add PR
                </button>
              </div>
            </div>
            <div className="table-container PRsTableContainer">
              <table className="table PRsTable is-bordered is-striped">
                {this.state.PRdata.length > 0 ? (
                  <tbody>
                    <tr className="trHeaderPRs">
                      <th>Exercise</th>
                      <th>Weight</th>
                      <th>Reps</th>
                    </tr>
                    {this.state.PRdata.map((row, i) => {
                      return (
                        <tr onClick={() => this.handleClickPRRow(row)}>
                          <td>{row.exercise}</td>
                          <td>{row.weight}</td>
                          <td>{row.reps}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                ) : (
                  <div className="noPrsYetWrapperDiv forwardInAnimation">
                    <div className="noPRsYet">No PRs yet</div>
                  </div>
                )}
              </table>
            </div>
            <div className="bottomPaddingSettingsPage"></div>
          </div>

          {this.state.PRModalActive === "" &&
          this.state.rowModalActive === "" ? (
            <div className="logOutButtonAppWrapper">
              <LogoutButton />
            </div>
          ) : (
            <div id="hide"></div>
          )}

          <div className={`modal rowModal ${this.state.rowModalActive}`}>
            <div className="modal-background"></div>
            <div className="modal-card rowModalCard forwardInAnimation">
              <header className="modal-card-head">
                <p className="modal-card-title">
                  {this.state.currentRow.exercise}
                </p>
              </header>
              <section className="modal-card-body">
                <div>
                  <span className="prRowP">Weight</span>
                  <input
                    value={this.state.updatingRow.weight}
                    onChange={this.handleChangeUpdatingRowWeight}
                    className="input prRowInput"
                    placeholder={this.state.currentRow.weight}
                  ></input>
                </div>
                <div>
                  {" "}
                  <span className="prRowP">Reps</span>
                  <input
                    value={this.state.updatingRow.reps}
                    onChange={this.handleChangeUpdatingRowReps}
                    className="input prRowInput"
                    placeholder={this.state.currentRow.reps}
                  ></input>
                </div>
              </section>
              <footer className="modal-card-foot">
                <button
                  onClick={this.handleSaveChanges}
                  className="button is-success is-small"
                >
                  Save changes
                </button>
                <button
                  onClick={this.handleCancelPRModal}
                  className="button is-small"
                >
                  Cancel
                </button>
                <button
                  onClick={this.handleDeletePR}
                  className="button is-small is-danger deleteRowButton"
                >
                  Delete PR
                </button>
              </footer>
            </div>
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
                      className="input"
                      value={this.state.exercise}
                      onChange={this.handleChangeExercise}
                    ></input>
                  </span>
                </div>
                <div className="prTagDiv">
                  <span className="prTag">Weight</span>
                  <span>
                    <input
                      className="input"
                      value={this.state.weight}
                      onChange={this.handleChangeWeight}
                    ></input>
                  </span>
                </div>
                <div className="prTagDiv">
                  <span className="prTag">Reps</span>
                  <span>
                    <input
                      className="input"
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
