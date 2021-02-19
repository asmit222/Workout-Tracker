import React, { Component } from "react";
import Previousworkouts from "./previousworkouts";
import EmptyTemplate from "./emptyTemplate";
import Header from "./header";
import axios from "axios";
import Template from "./template";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";

import moment from "moment";

import TimePicker from "rc-time-picker";
import ReactDOM from "react-dom";
import "rc-time-picker/assets/index.css";

var newDay;

class newworkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentYear: new Date().getFullYear(),
      workoutsPerMonth: {
        jan: 0,
        feb: 0,
        mar: 0,
        apr: 0,
        may: 0,
        jun: 0,
        jul: 0,
        aug: 0,
        sep: 0,
        oct: 0,
        nov: 0,
        dec: 0,
      },
      runsPerMonth: {
        jan: 0,
        feb: 0,
        mar: 0,
        apr: 0,
        may: 0,
        jun: 0,
        jul: 0,
        aug: 0,
        sep: 0,
        oct: 0,
        nov: 0,
        dec: 0,
      },
      workoutsPerMonthPercentages: {
        jan: "0",
        feb: "0",
        mar: "0",
        apr: "0",
        may: "0",
        jun: "0",
        jul: "0",
        aug: "0",
        sep: "0",
        oct: "0",
        nov: "0",
        dec: "0",
      },
      runsPerMonthPercentages: {
        jan: "0",
        feb: "0",
        mar: "0",
        apr: "0",
        may: "0",
        jun: "0",
        jul: "0",
        aug: "0",
        sep: "0",
        oct: "0",
        nov: "0",
        dec: "0",
      },
      showStats: "",
      pookClassName: "pook",
      quickStartSelected: "",
      currentTemplate: {
        name: "AUSTIN",
        templateName: "'template5'",
        workout1: " , , ",
        workout2: " , , ",
        workout3: " , , ",
        workout4: " , , ",
        workout5: " , , ",
        workout6: " , , ",
        workout7: " , , ",
      },
      workoutName: "",
      templates: [{ templateName: "nonamelikethis" }, { templateName: "" }],
      dropDown: "",
      day1Selected: "hide",
      emptyTemplateSelected: "hide1",
      templateSelected: "hide",
      day: "",
      runLogModalActive: "",
      milesRan: "",
      minutesRan: "",
      runData: [],
      todayDate: new Date(),
    };
    this.handleDaySelection = this.handleDaySelection.bind(this);
    this.hideDropDown = this.hideDropDown.bind(this);

    this.handleQuickStart = this.handleQuickStart.bind(this);

    this.exitRunLogModal = this.exitRunLogModal.bind(this);
    this.handleSaveRun = this.handleSaveRun.bind(this);
    this.openRunLogModal = this.openRunLogModal.bind(this);

    this.handleChangeMiles = this.handleChangeMiles.bind(this);
    this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
    this.setRunGraphData = this.setRunGraphData.bind(this);
  }

  handleChangeMinutes(e) {
    // var time = JSON.stringify(e._d).split(" ")[4];
    if (!e) {
      this.setState({
        minutesRan: "no time entered",
      });
    } else {
      var time = JSON.stringify(e._d)
        .split("")
        .slice(
          JSON.stringify(e._d).length - 14,
          JSON.stringify(e._d).length - 6
        )
        .join("")
        .split(":");

      time[0] = Number(time[0] - 5).toString();
      if (Number(time[0]) < 0) {
        time[0] = JSON.stringify(Number(time[0]) + 24);
      }

      if (time[0].length === 1) {
        time[0] === "0" + time[0];
      }

      time = time.join(":");

      this.setState({
        minutesRan: time,
      });
    }
  }

  handleChangeMiles(e) {
    var index = "1234567890.";

    var count = 0;

    var arr = e.target.value.split("");
    var boolean = true;

    for (var i = 0; i < arr.length; i++) {
      if (index.indexOf(arr[i]) === -1) {
        boolean = false;
      }
      if (arr[i] === ".") {
        count++;
      }
    }
    if (count > 1) {
      boolean = false;
    }

    if (!boolean) {
      console.log("numbers only");

      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
      this.setState(
        {
          milesRan: e.target.value,
        },
        () => {
          console.log(this.state.minutesRan, this.state.milesRan);
        }
      );
    }
  }

  handleSaveRun() {
    const thisBind = this;

    confirmAlert({
      title: "Submit run?",
      buttons: [
        {
          label: "Submit",
          onClick: () => {
            thisBind.exitRunLogModal();

            thisBind.setState(
              {
                runsPerMonth: {
                  jan: 0,
                  feb: 0,
                  mar: 0,
                  apr: 0,
                  may: 0,
                  jun: 0,
                  jul: 0,
                  aug: 0,
                  sep: 0,
                  oct: 0,
                  nov: 0,
                  dec: 0,
                },
                runsPerMonthPercentages: {
                  jan: "0",
                  feb: "0",
                  mar: "0",
                  apr: "0",
                  may: "0",
                  jun: "0",
                  jul: "0",
                  aug: "0",
                  sep: "0",
                  oct: "0",
                  nov: "0",
                  dec: "0",
                },
                runData: [],
              },
              () => {
                axios
                  .post(
                    "/submitRun",
                    `${[
                      thisBind.state.todayDate,
                      thisBind.props.location.state.name,
                      thisBind.state.milesRan,
                      thisBind.state.minutesRan,
                    ]}`
                  )
                  .then(
                    (response) => {
                      console.log("run saved!");
                    },
                    (error) => {
                      alert(error);
                    }
                  )
                  .then((response) => {
                    console.log("run saved!");
                    axios
                      .post(
                        "/getRunData",
                        `${[thisBind.props.location.state.name]}`
                      )
                      .then(
                        (response) => {
                          thisBind.setState(
                            {
                              milesRan: "",
                              minutesRan: "",
                              runData: response.data,
                            },
                            thisBind.setRunGraphData
                          );
                          console.log("data1", response.data);
                        },
                        (error) => {
                          alert(error);
                        }
                      );
                  });
              }
            );
          },
        },

        {
          label: "Cancel",
          onClick: () => console.log("user clicked no"),
        },
      ],
    });
  }

  exitRunLogModal() {
    this.setState({
      runLogModalActive: "",
    });
  }
  openRunLogModal() {
    this.setState({
      runLogModalActive: "is-active",
    });
  }

  setRunGraphData() {
    var monthArr = [];
    for (var i = 0; i < this.state.runData.length; i++) {
      if (
        this.state.runData[i].date.split(" ")[2].toString() ===
        this.state.currentYear.toString()
      ) {
        monthArr.push([
          this.state.runData[i].date.split(" ")[0],
          this.state.runData[i].miles,
        ]);
      }
    }
    monthArr.forEach((month) => {
      if (month[0] === "Jan") {
        var old = this.state.runsPerMonth;
        old.jan = old.jan + Number(month[1]);
        this.setState({
          runsPerMonth: old,
        });
      }
      if (month[0] === "Feb") {
        var old = this.state.runsPerMonth;
        old.feb = old.feb + Number(month[1]);
        this.setState({
          runsPerMonth: old,
        });
      }
      if (month[0] === "Mar") {
        var old = this.state.runsPerMonth;
        old.mar = old.mar + Number(month[1]);
        this.setState({
          runsPerMonth: old,
        });
      }
      if (month[0] === "Apr") {
        var old = this.state.runsPerMonth;
        old.apr = old.apr + Number(month[1]);
        this.setState({
          runsPerMonth: old,
        });
      }
      if (month[0] === "May") {
        var old = this.state.runsPerMonth;
        old.may = old.may + Number(month[1]);
        this.setState({
          runsPerMonth: old,
        });
      }
      if (month[0] === "Jun") {
        var old = this.state.runsPerMonth;
        old.jun = old.jun + Number(month[1]);
        this.setState({
          runsPerMonth: old,
        });
      }
      if (month[0] === "Jul") {
        var old = this.state.runsPerMonth;
        old.jul = old.jul + Number(month[1]);
        this.setState({
          runsPerMonth: old,
        });
      }
      if (month[0] === "Aug") {
        var old = this.state.runsPerMonth;
        old.aug = old.aug + Number(month[1]);
        this.setState({
          runsPerMonth: old,
        });
      }
      if (month[0] === "Sep") {
        var old = this.state.runsPerMonth;
        old.sep = old.sep + Number(month[1]);
        this.setState({
          runsPerMonth: old,
        });
      }
      if (month[0] === "Oct") {
        var old = this.state.runsPerMonth;
        old.oct = old.oct + Number(month[1]);
        this.setState({
          runsPerMonth: old,
        });
      }
      if (month[0] === "Nov") {
        var old = this.state.runsPerMonth;
        old.nov = old.nov + Number(month[1]);
        this.setState({
          runsPerMonth: old,
        });
      }
      if (month[0] === "Dec") {
        var old = this.state.runsPerMonth;
        old.dec = old.dec + Number(month[1]);
        this.setState({
          runsPerMonth: old,
        });
      }
    });

    var oldRuns = this.state.runsPerMonth;
    for (var key in oldRuns) {
      oldRuns[key] = Math.round(Number(oldRuns[key]) * 10) / 10;
    }

    this.setState({
      runsPerMonth: oldRuns,
    });

    var maxWorkoutsInAMonth = 0;
    for (var key in this.state.runsPerMonth) {
      if (this.state.runsPerMonth[key] > maxWorkoutsInAMonth) {
        maxWorkoutsInAMonth = this.state.runsPerMonth[key];
      }
    }

    for (var key in this.state.runsPerMonthPercentages) {
      var workouts = this.state.runsPerMonth[key];
      workouts = workouts / maxWorkoutsInAMonth;
      workouts = workouts * 0.8 * 100;

      var old = this.state.runsPerMonthPercentages;
      old[key] = workouts.toString();
      this.setState({
        runsPerMonthPercentages: old,
      });
    }
  }

  setGraphData() {
    var monthArr = [];
    for (var i = 0; i < this.state.data.length; i++) {
      if (
        this.state.data[i].workoutDate.split(" ")[2].toString() ===
        this.state.currentYear.toString()
      ) {
        monthArr.push(this.state.data[i].workoutDate.split(" ")[0]);
      }
    }
    monthArr.forEach((month) => {
      if (month === "Jan") {
        var old = this.state.workoutsPerMonth;
        old.jan = old.jan + 1;
        this.setState({
          workoutsPerMonth: old,
        });
      }
      if (month === "Feb") {
        var old = this.state.workoutsPerMonth;
        old.feb = old.feb + 1;
        this.setState({
          workoutsPerMonth: old,
        });
      }
      if (month === "Mar") {
        var old = this.state.workoutsPerMonth;
        old.mar = old.mar + 1;
        this.setState({
          workoutsPerMonth: old,
        });
      }
      if (month === "Apr") {
        var old = this.state.workoutsPerMonth;
        old.apr = old.apr + 1;
        this.setState({
          workoutsPerMonth: old,
        });
      }
      if (month === "May") {
        var old = this.state.workoutsPerMonth;
        old.may = old.may + 1;
        this.setState({
          workoutsPerMonth: old,
        });
      }
      if (month === "Jun") {
        var old = this.state.workoutsPerMonth;
        old.jun = old.jun + 1;
        this.setState({
          workoutsPerMonth: old,
        });
      }
      if (month === "Jul") {
        var old = this.state.workoutsPerMonth;
        old.jul = old.jul + 1;
        this.setState({
          workoutsPerMonth: old,
        });
      }
      if (month === "Aug") {
        var old = this.state.workoutsPerMonth;
        old.aug = old.aug + 1;
        this.setState({
          workoutsPerMonth: old,
        });
      }
      if (month === "Sep") {
        var old = this.state.workoutsPerMonth;
        old.sep = old.sep + 1;
        this.setState({
          workoutsPerMonth: old,
        });
      }
      if (month === "Oct") {
        var old = this.state.workoutsPerMonth;
        old.oct = old.oct + 1;
        this.setState({
          workoutsPerMonth: old,
        });
      }
      if (month === "Nov") {
        var old = this.state.workoutsPerMonth;
        old.nov = old.nov + 1;
        this.setState({
          workoutsPerMonth: old,
        });
      }
      if (month === "Dec") {
        var old = this.state.workoutsPerMonth;
        old.dec = old.dec + 1;
        this.setState({
          workoutsPerMonth: old,
        });
      }
    });

    var maxWorkoutsInAMonth = 0;
    for (var key in this.state.workoutsPerMonth) {
      if (this.state.workoutsPerMonth[key] > maxWorkoutsInAMonth) {
        maxWorkoutsInAMonth = this.state.workoutsPerMonth[key];
      }
    }

    for (var key in this.state.workoutsPerMonthPercentages) {
      var workouts = this.state.workoutsPerMonth[key];
      workouts = workouts / maxWorkoutsInAMonth;
      workouts = workouts * 0.8 * 100;

      var old = this.state.workoutsPerMonthPercentages;
      old[key] = workouts.toString();
      this.setState({
        workoutsPerMonthPercentages: old,
      });
    }
  }

  handleQuickStart(e) {
    e.preventDefault();

    this.setState({
      day1Selected: "hide",
      emptyTemplateSelected: "show1",
      templateSelected: "hide",
      day: "Custom Workout",
      quickStartSelected: "hide",
      pook: "hide",
    });
  }

  componentDidMount() {
    var thisBind = this;

    if (this.props.location.state !== undefined) {
      axios.post("/getRunData", `${[thisBind.props.location.state.name]}`).then(
        (response) => {
          thisBind.setState(
            {
              runData: response.data,
            },
            this.setRunGraphData
          );
          console.log(response.data);
        },
        (error) => {
          alert(error);
        }
      );

      axios
        .post("/getWorkouts", `${[thisBind.props.location.state.name]}`)
        .then(
          (response) => {
            response.data.reverse();
            thisBind.setState(
              {
                data: response.data,
              },
              this.setGraphData
            );
            console.log(response.data);
          },
          (error) => {
            alert(error);
          }
        );

      axios
        .post("/getTemplates", `${[thisBind.props.location.state.name]}`)
        .then(
          (response) => {
            if (response.data.length > 0) {
              response.data.reverse();
              thisBind.setState({
                templates: response.data,
              });
            }
          },
          (error) => {
            alert(error);
          }
        );
    } else {
      console.log("testing");
      this.props.history.push("/Home");
    }
    setTimeout(() => console.log(this.state.templates), 2000);
  }

  hideDropDown(e) {
    if (this.state.dropDown === "") {
      this.setState({
        dropDown: "hide",
      });
    } else {
      this.setState({
        dropDown: "",
      });
    }
  }

  handleDaySelection(e) {
    console.log(e.target.value);
    var thisBind = this;
    e.preventDefault();
    newDay = e.target.value;

    this.setState({
      showStats: "hide",
    });

    if (newDay === "Custom Workout") {
      thisBind.setState({
        day1Selected: "hide",
        emptyTemplateSelected: "show1",
        templateSelected: "hide",
        day: "Custom Workout",
        quickStartSelected: "hide",
        pookClassName: "hide",
      });
    } else if (newDay === "Austin's Day 1") {
      thisBind.setState({
        day: "Austins Day 1",
        day1Selected: "show",
        templateSelected: "hide",
        emptyTemplateSelected: "hide1",
        quickStartSelected: "hide",
        pookClassName: "hide",
      });
    } else if (newDay === "Select a workout") {
      thisBind.setState({
        day: "",
        day1Selected: "hide",
        templateSelected: "hide",
        emptyTemplateSelected: "hide1",
        quickStartSelected: "",
        pookClassName: "pook",
        showStats: "",
      });
    } else {
      thisBind.setState(
        {
          workoutName: e.target.value,
          day1Selected: "hide",
          emptyTemplateSelected: "hide1",
          templateSelected: "show",
          quickStartSelected: "hide",
          pookClassName: "hide",
        },
        after
      );
      function after() {
        for (var i = 0; i < thisBind.state.templates.length; i++) {
          if (
            thisBind.state.templates[i].templateName.slice(
              1,
              thisBind.state.templates[i].templateName.length - 1
            ) === thisBind.state.workoutName
          ) {
            thisBind.setState({
              currentTemplate: thisBind.state.templates[i],
            });
          }
        }
      }
    }
  }

  render() {
    if (this.state.templates[0]["templateName"] !== "nonamelikethis") {
      var templates = this.state.templates.map((template) => {
        return (
          <option>
            {template.templateName.slice(1, template.templateName.length - 1)}
          </option>
        );
      });
    } else {
      var templates = <div id="hide"></div>;
    }
    return (
      <React.Fragment>
        <div className="block selectWorkoutAnimation">
          {/* =============================== running modal ====================================== */}
          <div className={`modal ${this.state.runLogModalActive}`}>
            <div className="modal-background"></div>
            <div className="modal-card modalCardRunLog forwardInAnimation">
              <header className="modal-card-head">
                <p className="modal-card-title modalTitleLogRun">Log run</p>
              </header>
              <section className="modal-card-body">
                <input
                  onChange={this.handleChangeMiles}
                  id="milesInput"
                  className="input"
                  type="text"
                  placeholder="miles"
                ></input>
                {/* <input
                  onChange={this.handleChangeMinutes}
                  id="runTimeInput"
                  className="input"
                  type="text"
                  placeholder="min : sec"
                ></input> */}

                <TimePicker
                  onChange={this.handleChangeMinutes}
                  defaultValue={moment("00:00:00", "HH:mm:ss")}
                />
              </section>
              <footer className="modal-card-foot">
                <button
                  onClick={this.handleSaveRun}
                  className="button is-success"
                >
                  Save run
                </button>
                <button
                  onClick={this.exitRunLogModal}
                  className="button is-dark"
                >
                  Cancel
                </button>
              </footer>
            </div>
          </div>

          {/* ===================================================================================== */}

          <div className="headerNewWorkoutPageDiv">
            <div id={this.state.dropDown} className="field selector">
              <p className="control">
                <span className="select">
                  <select
                    onChange={this.handleDaySelection}
                    value={this.state.value}
                  >
                    <option>Select a workout</option>
                    <option>Custom Workout</option>

                    {templates}
                  </select>
                </span>
              </p>
            </div>
            <button
              onClick={this.openRunLogModal}
              id="runButton"
              className="button"
            ></button>
          </div>

          <div
            id={this.state.showStats}
            className="forwardInAnimation barcontainer"
          >
            <div className="barcontainerheader">
              {`Workouts ${this.state.currentYear}`}
            </div>

            <div
              className="bar"
              style={{
                height: `${this.state.workoutsPerMonthPercentages.jan}%`,
              }}
            >
              {this.state.workoutsPerMonth.jan}
              <div className="barlabel">Jan</div>
            </div>

            <div
              className="bar"
              style={{
                height: `${this.state.workoutsPerMonthPercentages.feb}%`,
              }}
            >
              {this.state.workoutsPerMonth.feb}
              <div className="barlabel">Feb</div>
            </div>
            <div
              className="bar"
              style={{
                height: `${this.state.workoutsPerMonthPercentages.mar}%`,
              }}
            >
              {this.state.workoutsPerMonth.mar}
              <div className="barlabel">Mar</div>
            </div>
            <div
              className="bar"
              style={{
                height: `${this.state.workoutsPerMonthPercentages.apr}%`,
              }}
            >
              {this.state.workoutsPerMonth.apr}
              <div className="barlabel">Apr </div>
            </div>
            <div
              className="bar"
              style={{
                height: `${this.state.workoutsPerMonthPercentages.may}%`,
              }}
            >
              {this.state.workoutsPerMonth.may}
              <div className="barlabel">May</div>
            </div>
            <div
              className="bar"
              style={{
                height: `${this.state.workoutsPerMonthPercentages.jun}%`,
              }}
            >
              {this.state.workoutsPerMonth.jun}
              <div className="barlabel">Jun</div>
            </div>
            <div
              className="bar"
              style={{
                height: `${this.state.workoutsPerMonthPercentages.jul}%`,
              }}
            >
              {this.state.workoutsPerMonth.jul}
              <div className="barlabel">Jul</div>
            </div>
            <div
              className="bar"
              style={{
                height: `${this.state.workoutsPerMonthPercentages.aug}%`,
              }}
            >
              {this.state.workoutsPerMonth.aug}
              <div className="barlabel">Aug</div>
            </div>
            <div
              className="bar"
              style={{
                height: `${this.state.workoutsPerMonthPercentages.sep}%`,
              }}
            >
              {this.state.workoutsPerMonth.sep}
              <div className="barlabel">Sep</div>
            </div>
            <div
              className="bar"
              style={{
                height: `${this.state.workoutsPerMonthPercentages.oct}%`,
              }}
            >
              {this.state.workoutsPerMonth.oct}
              <div className="barlabel">Oct </div>
            </div>
            <div
              className="bar"
              style={{
                height: `${this.state.workoutsPerMonthPercentages.nov}%`,
              }}
            >
              {this.state.workoutsPerMonth.nov}
              <div className="barlabel">Nov</div>
            </div>
            <div
              className="bar"
              style={{
                height: `${this.state.workoutsPerMonthPercentages.dec}%`,
              }}
            >
              {this.state.workoutsPerMonth.dec}
              <div className="barlabel">Dec</div>
            </div>
          </div>

          {/* =============================================== run box ================================================================== */}

          <div
            id={this.state.showStats}
            className="forwardInAnimation barcontainer2"
          >
            <div className="barcontainerheader">
              {`Miles Ran ${this.state.currentYear}`}
            </div>

            <div
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.jan}%`,
              }}
            >
              {this.state.runsPerMonth.jan}
              <div className="barlabel">Jan</div>
            </div>

            <div
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.feb}%`,
              }}
            >
              {this.state.runsPerMonth.feb}
              <div className="barlabel">Feb</div>
            </div>
            <div
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.mar}%`,
              }}
            >
              {this.state.runsPerMonth.mar}
              <div className="barlabel">Mar</div>
            </div>
            <div
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.apr}%`,
              }}
            >
              {this.state.runsPerMonth.apr}
              <div className="barlabel">Apr </div>
            </div>
            <div
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.may}%`,
              }}
            >
              {this.state.runsPerMonth.may}
              <div className="barlabel">May</div>
            </div>
            <div
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.jun}%`,
              }}
            >
              {this.state.runsPerMonth.jun}
              <div className="barlabel">Jun</div>
            </div>
            <div
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.jul}%`,
              }}
            >
              {this.state.runsPerMonth.jul}
              <div className="barlabel">Jul</div>
            </div>
            <div
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.aug}%`,
              }}
            >
              {this.state.runsPerMonth.aug}
              <div className="barlabel">Aug</div>
            </div>
            <div
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.sep}%`,
              }}
            >
              {this.state.runsPerMonth.sep}
              <div className="barlabel">Sep</div>
            </div>
            <div
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.oct}%`,
              }}
            >
              {this.state.runsPerMonth.oct}
              <div className="barlabel">Oct </div>
            </div>
            <div
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.nov}%`,
              }}
            >
              {this.state.runsPerMonth.nov}
              <div className="barlabel">Nov</div>
            </div>
            <div
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.dec}%`,
              }}
            >
              {this.state.runsPerMonth.dec}
              <div className="barlabel">Dec</div>
            </div>
          </div>

          {/* ====================================================================================================== */}

          <div id={this.state.templateSelected}>
            <Template
              currentTemplate={this.state.currentTemplate}
              templates={this.state.templates}
              workoutName={this.state.workoutName}
              name={
                this.props.location.state !== undefined
                  ? this.props.location.state.name
                  : null
              }
              quickStartSelected={this.state.quickStartSelected}
              day={this.state.day}
              hideDropDown={this.hideDropDown}
              hideNav={
                this.props.location.state !== undefined
                  ? this.props.location.state.hideNav
                  : null
              }
            />
          </div>

          <div id={this.state.emptyTemplateSelected}>
            <EmptyTemplate
              name={
                this.props.location.state !== undefined
                  ? this.props.location.state.name
                  : null
              }
              quickStartSelected={this.state.quickStartSelected}
              day={this.state.day}
              hideDropDown={this.hideDropDown}
              hideNav={
                this.props.location.state !== undefined
                  ? this.props.location.state.hideNav
                  : null
              }
            />
          </div>

          <div id={this.state.pookClassName}>
            {this.state.templates[0].name === "NATALIE" ? (
              <div>
                <div>
                  {" "}
                  {"have a good workout my pook! "}
                  <i className="fa fa-heart"></i>{" "}
                </div>
                <div className="underHaveAGoodWorkout"></div>
                <div className="underHaveAGoodWorkout2"></div>
              </div>
            ) : (
              <div id="hide"></div>
            )}
          </div>
        </div>

        {/* <div className='block quickStartContainer'>
      <button id={this.state.quickStartSelected} onClick={this.handleQuickStart} className='button is-small is-info quickStartButton'>Quick Start - Empty Template</button>
      </div>
      <div className='block'>
      <div className='block centerContent'>My Templates</div>
      <div className='centerButtons'>
     {templates}
      </div>
      </div> */}
      </React.Fragment>
    );
  }
}

export default newworkout;
