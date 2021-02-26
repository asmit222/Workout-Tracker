import React, { Component, useState, useEffect } from "react";
import App from "../../App";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class Previousworkouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: [],
    };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.avgMile = this.avgMile.bind(this);
    this.minTommss = this.minTommss.bind(this);
  }

  minTommss(minutes) {
    var sign = minutes < 0 ? "-" : "";
    var min = Math.floor(Math.abs(minutes));
    var sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return (
      sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec
    );
  }

  avgMile(miles, time) {
    var avg = "n/a";
    var timeArr = time.split(":");
    var hours = Number(timeArr[0]);
    var minutes = Number(timeArr[1]);
    var seconds = Number(timeArr[2]);

    var totalSeconds = seconds + minutes * 60 + hours * 60 * 60;

    var avgSeconds = totalSeconds / miles;

    var avgMins = avgSeconds / 60;

    return this.minTommss(avgMins) === "NaN:NaN"
      ? "n/a"
      : this.minTommss(avgMins);
  }

  handleDeleteClick(e) {
    e.preventDefault();
    var thisBind = this;
    var workout = e.target.value;

    if (workout.split(",")[1] === "54634563dfghdfgh43900323") {
      workout = workout.split(",");
      workout[1] = "Run";
      workout = workout.join(",");
    }

    console.log("workoutt: ", workout);

    confirmAlert({
      title: `Delete ${workout.split(",")[1]} - ${
        workout.split(",")[2]
      } from history?`,
      buttons: [
        {
          label: "Delete",
          onClick: () => {
            console.log("here", [
              workout.split(",")[1],
              workout.split(",")[0],
              thisBind.props.location.state.getName(),
            ]);
            axios
              .post(
                "/deleteWorkout",
                `${[
                  workout.split(",")[1],
                  workout.split(",")[0],
                  thisBind.props.location.state.getName(),
                ]}`
              )
              .then(
                (response) => {
                  this._isMounted = true;
                  if (this.props.location.state !== undefined) {
                    axios
                      .post(
                        "/getWorkouts",
                        `${[thisBind.props.location.state.getName()]}`
                      )
                      .then(
                        (response) => {
                          response.data.reverse();
                          thisBind.setState({
                            data: response.data,
                          });
                        },
                        (error) => {
                          alert(error);
                        }
                      );
                  } else {
                    this.props.history.push("/Home");
                  }
                },
                (error) => {
                  alert(error);
                }
              );
          },
        },
        {
          label: "Cancel",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  }

  componentDidMount() {
    this._isMounted = true;
    console.log("mounted");

    var thisBind = this;

    if (this.props.location.state !== undefined) {
      axios
        .post("/getWorkouts", `${[thisBind.props.location.state.getName()]}`)
        .then(
          (response) => {
            response.data.reverse();
            thisBind.setState({
              data: response.data,
            });
          },
          (error) => {
            alert(error);
          }
        );
    } else {
      this.props.history.push("/Home");
    }
    setTimeout(() => console.log("data:", this.state.data), 1000);
  }

  render() {
    return (
      <div className="previousWorkoutsWrapper">
        {this.state.data.map((workout) =>
          workout.workoutPlan !== "354634563dfghdfgh439003235" ? (
            <div className="previousContainer previousWorkout forwardInAnimation">
              <div className="workoutName is-info">
                <span>
                  {workout.workoutPlan.slice(1, workout.workoutPlan.length - 1)}
                </span>
              </div>

              <button
                value={[
                  workout.id,
                  workout.workoutPlan.slice(1, workout.workoutPlan.length - 1),
                  workout.workoutDate,
                ]}
                onClick={this.handleDeleteClick}
                className="delete deleteButtonHistory is-small "
              ></button>

              <div className="scrollContainer2">
                <table className="content is-small table is-bordered">
                  <thead className="dateaboveprev">{workout.workoutDate}</thead>
                  <thead id="workoutheader" className={workout.color}>
                    <tr>
                      <th>Workout</th>
                      <th>Sets</th>
                      <th>Reps</th>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                    </tr>
                  </thead>
                  <tbody className={workout.color}>
                    <tr>
                      <td>{workout.workout1.split(",")[0]}</td>
                      <td>{workout.workout1.split(",")[1]}</td>
                      <td>{workout.workout1.split(",")[2]}</td>
                      <td>{workout.workout1.split(",")[3]}</td>
                      <td>{workout.workout1.split(",")[4]}</td>
                      <td>{workout.workout1.split(",")[5]}</td>
                      <td>{workout.workout1.split(",")[6]}</td>
                    </tr>
                    <tr>
                      <td>{workout.workout2.split(",")[0]}</td>
                      <td>{workout.workout2.split(",")[1]}</td>
                      <td>{workout.workout2.split(",")[2]}</td>
                      <td>{workout.workout2.split(",")[3]}</td>
                      <td>{workout.workout2.split(",")[4]}</td>
                      <td>{workout.workout2.split(",")[5]}</td>
                      <td>{workout.workout2.split(",")[6]}</td>
                    </tr>
                    {workout.workout3.split(",")[0] !== " " &&
                    workout.workout3.split(",")[0] !== "" ? (
                      <tr>
                        <td>{workout.workout3.split(",")[0]}</td>
                        <td>{workout.workout3.split(",")[1]}</td>
                        <td>{workout.workout3.split(",")[2]}</td>
                        <td>{workout.workout3.split(",")[3]}</td>
                        <td>{workout.workout3.split(",")[4]}</td>
                        <td>{workout.workout3.split(",")[5]}</td>
                        <td>{workout.workout3.split(",")[6]}</td>
                      </tr>
                    ) : (
                      <tr id="hide"></tr>
                    )}
                    {workout.workout4.split(",")[0] !== " " &&
                    workout.workout3.split(",")[0] !== "" ? (
                      <tr>
                        <td>{workout.workout4.split(",")[0]}</td>
                        <td>{workout.workout4.split(",")[1]}</td>
                        <td>{workout.workout4.split(",")[2]}</td>
                        <td>{workout.workout4.split(",")[3]}</td>
                        <td>{workout.workout4.split(",")[4]}</td>
                        <td>{workout.workout4.split(",")[5]}</td>
                        <td>{workout.workout4.split(",")[6]}</td>
                      </tr>
                    ) : (
                      <tr id="hide"></tr>
                    )}
                    {workout.workout5.split(",")[0] !== " " &&
                    workout.workout3.split(",")[0] !== "" ? (
                      <tr>
                        <td>{workout.workout5.split(",")[0]}</td>
                        <td>{workout.workout5.split(",")[1]}</td>
                        <td>{workout.workout5.split(",")[2]}</td>
                        <td>{workout.workout5.split(",")[3]}</td>
                        <td>{workout.workout5.split(",")[4]}</td>
                        <td>{workout.workout5.split(",")[5]}</td>
                        <td>{workout.workout5.split(",")[6]}</td>
                      </tr>
                    ) : (
                      <tr id="hide"></tr>
                    )}
                    {workout.workout6.split(",")[0] !== " " &&
                    workout.workout3.split(",")[0] !== "" ? (
                      <tr>
                        <td>{workout.workout6.split(",")[0]}</td>
                        <td>{workout.workout6.split(",")[1]}</td>
                        <td>{workout.workout6.split(",")[2]}</td>
                        <td>{workout.workout6.split(",")[3]}</td>
                        <td>{workout.workout6.split(",")[4]}</td>
                        <td>{workout.workout6.split(",")[5]}</td>
                        <td>{workout.workout6.split(",")[6]}</td>
                      </tr>
                    ) : (
                      <tr id="hide"></tr>
                    )}
                    {workout.workout7.split(",")[0] !== " " &&
                    workout.workout3.split(",")[0] !== "" ? (
                      <tr>
                        <td>{workout.workout7.split(",")[0]}</td>
                        <td>{workout.workout7.split(",")[1]}</td>
                        <td>{workout.workout7.split(",")[2]}</td>
                        <td>{workout.workout7.split(",")[3]}</td>
                        <td>{workout.workout7.split(",")[4]}</td>
                        <td>{workout.workout7.split(",")[5]}</td>
                        <td>{workout.workout7.split(",")[6]}</td>
                      </tr>
                    ) : (
                      <tr id="hide"></tr>
                    )}
                  </tbody>
                </table>
              </div>

              {workout.notes.length > 0 ? (
                <article className="content is-small message notes">
                  <div id="notesheader2" className="message-header">
                    <p>Notes</p>
                  </div>
                  <div className="message-body notesBody">{workout.notes}</div>
                </article>
              ) : (
                <div id="hide"> </div>
              )}
            </div>
          ) : (
            <div className="runHistoryContainer forwardInAnimation">
              <button
                value={[
                  workout.id,
                  workout.workoutPlan.slice(1, workout.workoutPlan.length - 1),
                  workout.workoutDate,
                ]}
                onClick={this.handleDeleteClick}
                className="delete deleteButtonHistory2 is-small "
              ></button>

              <button id="runButtonHistory" className="button"></button>
              <span className="dateaboveprev2">{workout.workoutDate}</span>
              <div>
                <span className="milesAndTimeSpan">distance: </span>
                <span className="milesandtimedata">{workout.workout1}</span>
              </div>
              <div>
                <span className="milesAndTimeSpan">time: </span>
                <span className="milesandtimedata">
                  {Number(workout.workout2.split(":")[0]) * 1 !== 0
                    ? workout.workout2
                    : workout.workout2.split(":").slice(1).join(":")}
                </span>
              </div>
              <div>
                <span className="milesAndTimeSpan">avg mile: </span>
                <span className="milesandtimedata">
                  {this.avgMile(workout.workout1, workout.workout2)}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    );
  }
}

export default Previousworkouts;
