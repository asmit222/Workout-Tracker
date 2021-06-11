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

import { exercises } from "./exercises";

import YouTube from "react-youtube";

// import searchYouTube from "./searchYoutube";

var newDay;

var timeTime = "00:00:00";

var timeCounterInterval = false;

class newworkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentYear: new Date().getFullYear(),
      currentYear2: new Date().getFullYear(),
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
      hideRunButton: "runButton",
      workoutsYet: false,
      runsYet: false,
      runButtonValue: "start run",
      runStatus: false,
      runButtonClassName: "is-info",
      startedRunning: false,
      playOrPauseIcon: "fa-play",
      timeValue: moment(timeTime, "HH:mm:ss"),
      personUsername: "",
      runSubmittedModal: "",
      totalWorkoutsNotRuns: 0,
      totalWorkoutsNotRunsThisYear: 0,
      totalRuns: 0,
      totalMilesRan: 0,
      bestAvgTimeMile: 0,
      avgTimeMile: 0,
      avgDistRan: 0,
      changingWorkoutGraphYear: "",
      changingRunGraphYear: "",
      exercises: [],
      exerciseMuscleGroups: [],
      exercisesModalActive: "",
      exercisesSearchValue: "",
      muscleGroupClicked: false,
      muscleGroupExercises: [],
      exerciseVideoModalActive: "",
      currentExerciseForVideo: "",
      currentVideo: {},
      videos: [],
      opts: {
        // height: "390",
        width: "100%",
        playerVars: {
          autoplay: 0,
        },
      },
      currentVideoID1: "",
      currentVideoID2: "",
      currentVideoID3: "",
      currentVideoID4: "",
      currentVideoID5: "",
      currentVideoID6: "",
      currentVideoID7: "",
      currentVideoID8: "",
      currentVideoID9: "",
      currentVideoID10: "",
      currentVideoTitle1: "",
      currentVideoTitle2: "",
      currentVideoTitle3: "",
      currentVideoTitle4: "",
      currentVideoTitle5: "",
      currentVideoTitle6: "",
      currentVideoTitle7: "",
      currentVideoTitle8: "",
      currentVideoTitle9: "",
      currentVideoTitle10: "",
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

    this.hideThenShowRunButton = this.hideThenShowRunButton.bind(this);

    this.handleStartRun = this.handleStartRun.bind(this);

    this.handleResetRunButton = this.handleResetRunButton.bind(this);
    this.calculateStats = this.calculateStats.bind(this);
    this.handleChangeWorkoutYearGraph =
      this.handleChangeWorkoutYearGraph.bind(this);
    this.handleChangeWorkoutYearGraph2 =
      this.handleChangeWorkoutYearGraph2.bind(this);

    this.handleChangeRunYearGraph = this.handleChangeRunYearGraph.bind(this);
    this.handleChangeRunYearGraph2 = this.handleChangeRunYearGraph2.bind(this);

    this.handleActivateExercisesModal =
      this.handleActivateExercisesModal.bind(this);

    this.handleChangeSearchExercises =
      this.handleChangeSearchExercises.bind(this);

    this.handleClickMuscleGroup = this.handleClickMuscleGroup.bind(this);

    this.handleClickExerciseText = this.handleClickExerciseText.bind(this);
    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleClickExerciseText(exercise) {
    this.setState({
      exerciseVideoModalActive: "is-active",
      currentExerciseForVideo: exercise,
      exercisesModalActive: "",
    });

    axios
      .get(`getYoutubeVideo/${exercise}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log(res.data);

        this.setState({
          currentVideoID1: res.data[0].channel.raw.id.videoId,
          currentVideoID2: res.data[1].channel.raw.id.videoId,
          currentVideoID3: res.data[2].channel.raw.id.videoId,
          currentVideoID4: res.data[3].channel.raw.id.videoId,
          currentVideoID5: res.data[4].channel.raw.id.videoId,
          currentVideoID6: res.data[5].channel.raw.id.videoId,
          currentVideoID7: res.data[6].channel.raw.id.videoId,
          currentVideoID8: res.data[7].channel.raw.id.videoId,
          currentVideoID9: res.data[8].channel.raw.id.videoId,
          currentVideoID10: res.data[9].channel.raw.id.videoId,

          currentVideoTitle1: res.data[0].channel.raw.snippet.title,
          currentVideoTitle2: res.data[1].channel.raw.snippet.title,
          currentVideoTitle3: res.data[2].channel.raw.snippet.title,
          currentVideoTitle4: res.data[3].channel.raw.snippet.title,
          currentVideoTitle5: res.data[4].channel.raw.snippet.title,
          currentVideoTitle6: res.data[5].channel.raw.snippet.title,
          currentVideoTitle7: res.data[6].channel.raw.snippet.title,
          currentVideoTitle8: res.data[7].channel.raw.snippet.title,
          currentVideoTitle9: res.data[8].channel.raw.snippet.title,
          currentVideoTitle10: res.data[9].channel.raw.snippet.title,
        });
      });
  }

  handleClickMuscleGroup(muscleGroup) {
    var filteredExercises = this.state.exercises.filter((exercise) => {
      return exercise.muscleGroup === muscleGroup;
    });

    this.setState({
      muscleGroupExercises: filteredExercises,
      muscleGroupClicked: true,
    });
  }

  handleChangeSearchExercises(e) {
    this.setState({
      exercisesSearchValue: e.target.value.toLowerCase(),
    });
  }

  handleActivateExercisesModal() {
    this.setState({
      exercisesModalActive:
        this.state.exercisesModalActive === "" ? "is-active" : "",
    });
  }

  handleChangeRunYearGraph() {
    var year = new Date().getFullYear().toString().split("");

    if (Number(year[year.length - 1]) === 9) {
      year[year.length - 2] = Number(year[year.length - 2] + 1).toString();
      year[year.length - 1] = "0";
      year = Number(year.join(""));
    } else {
      year = this.state.currentYear2 + 1;
    }

    this.setState(
      {
        currentYear2: year,
        changingRunGraphYear: "changingRunGraphYear",
      },
      () => {
        setTimeout(() => {
          this.setState({
            changingRunGraphYear: "",
          });
          this.setRunGraphData(year.toString());
        }, 300);
      }
    );
  }

  handleChangeRunYearGraph2() {
    var year = new Date().getFullYear().toString().split("");

    if (Number(year[year.length - 1]) === 0) {
      year[year.length - 2] = Number(year[year.length - 2] - 1).toString();
      year[year.length - 1] = "9";
      year = Number(year.join(""));
    } else {
      year = this.state.currentYear2 - 1;
    }

    this.setState(
      {
        currentYear2: year,
        changingRunGraphYear: "changingRunGraphYear",
      },
      () => {
        setTimeout(() => {
          this.setState({
            changingRunGraphYear: "",
          });
          this.setRunGraphData(year.toString());
        }, 300);
      }
    );
  }

  handleChangeWorkoutYearGraph2() {
    var year = new Date().getFullYear().toString().split("");

    if (Number(year[year.length - 1]) === 0) {
      year[year.length - 2] = Number(year[year.length - 2] - 1).toString();
      year[year.length - 1] = "9";
      year = Number(year.join(""));
    } else {
      year = this.state.currentYear - 1;
    }

    this.setState(
      {
        currentYear: year,
        changingWorkoutGraphYear: "changingWorkoutGraphYear",
      },
      () => {
        setTimeout(() => {
          this.setState({
            changingWorkoutGraphYear: "",
          });
          this.setGraphData(year.toString());
        }, 300);
      }
    );
  }

  handleChangeWorkoutYearGraph() {
    var year = new Date().getFullYear().toString().split("");

    if (Number(year[year.length - 1]) === 9) {
      year[year.length - 2] = Number(year[year.length - 2] + 1).toString();
      year[year.length - 1] = "0";
      year = Number(year.join(""));
    } else {
      year = this.state.currentYear + 1;
    }

    this.setState(
      {
        currentYear: year,
        changingWorkoutGraphYear: "changingWorkoutGraphYear",
      },
      () => {
        setTimeout(() => {
          this.setState({
            changingWorkoutGraphYear: "",
          });
          this.setGraphData(year.toString());
        }, 300);
      }
    );
  }

  calculateStats() {
    var totalWorkouts = 0;
    var totalRunz = 0;
    var totalMilezRan = 0;
    var totalworkoutsThisYear = 0;
    var avgTimeMile = 0;
    var bestAvgTimeMile = 0;
    var avgDistanceRan = 0;

    var totalMiles = 0;
    var totalTime = 0;

    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].workoutPlan !== "354634563dfghdfgh439003235") {
        totalWorkouts++;
        console.log(
          this.state.data[i].workoutDate.split(" ")[2],
          new Date().getFullYear().toString()
        );
        if (
          this.state.data[i].workoutDate.split(" ")[2] ===
          new Date().getFullYear().toString()
        ) {
          totalworkoutsThisYear++;
        }
      } else if (
        this.state.data[i].workoutPlan === "354634563dfghdfgh439003235"
      ) {
        totalRunz++;
        totalMilezRan = totalMilezRan + Number(this.state.data[i].workout1);
      }
    }
    this.setState({
      totalWorkoutsNotRuns: totalWorkouts,
      totalRuns: totalRunz,
      totalMilesRan: totalMilezRan,
      totalWorkoutsNotRunsThisYear: totalworkoutsThisYear,
    });
  }

  handleResetRunButton() {
    this.setState({
      timeCounterTime: "00:00:00",
      startedRunning: false,
      runStatus: false,
      runButtonClassName: "is-info",
      runButtonValue: "start run",
      playOrPauseIcon: "fa-play",
    });

    if (timeCounterInterval) {
      clearInterval(timeCounterInterval);
    }

    timeTime = "00:00:00";
    this.setState({
      timeValue: moment(timeTime, "HH:mm:ss"),
    });
  }

  handleStartRun() {
    if (!this.state.runStatus) {
      timeCounterInterval = setInterval(() => {
        var timeSplit = timeTime.split(":");

        if (Number(timeSplit[2]) < 59) {
          timeSplit[2] = (Number(timeSplit[2]) + 1).toString();
        } else if (Number(timeSplit[1]) < 59) {
          timeSplit[1] = (Number(timeSplit[1]) + 1).toString();
          timeSplit[2] = "00";
        } else {
          timeSplit[0] = (Number(timeSplit[0]) + 1).toString();
          timeSplit[1] = "00";
          timeSplit[2] = "00";
        }

        for (var i = 0; i < timeSplit.length; i++) {
          if (timeSplit[i].length < 2) {
            timeSplit[i] = "0" + timeSplit[i];
          }
        }

        timeTime = timeSplit.join(":");

        this.setState({
          timeValue: moment(timeTime, "HH:mm:ss"),
          minutesRan: timeTime,
        });
      }, 1000);

      this.setState({
        runStatus: true,
        startedRunning: true,
        runButtonValue: "pause",
        playOrPauseIcon: "fa-pause",
        runButtonClassName: "is-warning",
      });
    } else {
      if (this.state.startedRunning) {
        if (timeCounterInterval) {
          clearInterval(timeCounterInterval);
        }

        this.setState({
          runStatus: false,
          runButtonValue: "resume",
          playOrPauseIcon: "fa-play",
          runButtonClassName: "is-info",
        });
      } else {
        if (timeCounterInterval) {
          clearInterval(timeCounterInterval);
        }
        this.setState({
          runStatus: false,
          runButtonValue: "start run",
          playOrPauseIcon: "fa-play",
          runButtonClassName: "is-info",
        });
      }
    }
  }

  hideThenShowRunButton() {
    this.setState({
      hideRunButton: "hide",
    });

    setTimeout(() => {
      this.setState({
        hideRunButton: "runButton",
      });
    }, 2000);
  }

  handleChangeMinutes(e) {
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
        timeValue: moment(time, "HH:mm:ss"),
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

    if (this.state.milesRan === "") {
      alert("don't forget to enter your distance!");
    } else {
      confirmAlert({
        title: "Submit run?",
        buttons: [
          {
            label: "Submit",
            onClick: () => {
              thisBind.setState({
                runSubmittedModal: "is-active",
              });
              setTimeout(() => {
                this.setState({
                  runSubmittedModal: "",
                });
              }, 1500);

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
                      "/test",
                      `${[
                        thisBind.state.todayDate,
                        thisBind.props.location.state.getName(),
                        thisBind.state.milesRan,
                        thisBind.state.minutesRan,
                        "354634563dfghdfgh439003235",
                      ]}`
                    )
                    .then(
                      (response) => {
                        console.log("workout sent for workout!");
                      },
                      (error) => {
                        // alert(error);
                      }
                    );

                  axios
                    .post(
                      "/submitRun",
                      `${[
                        thisBind.state.todayDate,
                        thisBind.props.location.state.getName(),
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
                          `${[thisBind.props.location.state.getName()]}`
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
                            thisBind.exitRunLogModal();
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
  }

  exitRunLogModal() {
    timeTime = "00:00:00";
    this.setState({
      runLogModalActive: "",
      timeValue: moment(timeTime, "HH:mm:ss"),
      minutesRan: "00:00:00",
    });
    if (timeCounterInterval) {
      clearInterval(timeCounterInterval);
    }
  }

  openRunLogModal() {
    this.setState({
      runLogModalActive: "is-active",
    });
  }

  setRunGraphData() {
    this.setState(
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
      },
      () => {
        var monthArr = [];
        for (var i = 0; i < this.state.runData.length; i++) {
          if (
            this.state.runData[i].date.split(" ")[2].toString() ===
            this.state.currentYear2.toString()
          ) {
            monthArr.push([
              this.state.runData[i].date.split(" ")[0],
              this.state.runData[i].miles,
            ]);
          }
        }
        monthArr.forEach((month) => {
          if (!this.state.runsYet) {
            this.setState({
              runsYet: true,
            });
          }

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
          workouts = workouts * 0.45 * 100 + 18;

          var old = this.state.runsPerMonthPercentages;
          old[key] = workouts.toString();
          this.setState({
            runsPerMonthPercentages: old,
          });
        }
      }
    );
  }

  setGraphData(stringYear) {
    this.setState(
      {
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
      },
      () => {
        var monthArr = [];
        for (var i = 0; i < this.state.data.length; i++) {
          if (this.state.data[i].workoutPlan !== "354634563dfghdfgh439003235") {
            if (
              this.state.data[i].workoutDate.split(" ")[2].toString() ===
              stringYear
            ) {
              monthArr.push(this.state.data[i].workoutDate.split(" ")[0]);
            }
          }
        }
        monthArr.forEach((month) => {
          if (!this.state.workoutsYet) {
            this.setState({
              workoutsYet: true,
            });
          }

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

          // if (workouts > 3) {
          //   workouts = workouts / maxWorkoutsInAMonth;
          //   workouts = workouts * 0.65 * 100;
          // } else {
          workouts = workouts / maxWorkoutsInAMonth;
          workouts = workouts * 0.45 * 100 + 18;
          // }

          var old = this.state.workoutsPerMonthPercentages;
          old[key] = workouts.toString();
          this.setState({
            workoutsPerMonthPercentages: old,
          });
        }
      }
    );
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
      this.setState(
        {
          personUsername: thisBind.props.location.state.getName(),
          exercises: exercises,
        },
        () => {
          console.log(this.state.exercises);

          var muscleGroups = [];

          for (var i = 0; i < this.state.exercises.length; i++) {
            if (
              muscleGroups.indexOf(this.state.exercises[i].muscleGroup) === -1
            ) {
              muscleGroups.push(this.state.exercises[i].muscleGroup);
            }
          }

          console.log("groups: ", muscleGroups);
          this.setState({
            exerciseMuscleGroups: muscleGroups,
          });
        }
      );
      axios
        .post("/getRunData", `${[thisBind.props.location.state.getName()]}`)
        .then(
          (response) => {
            thisBind.setState(
              {
                runData: response.data,
              },
              this.setRunGraphData
            );
          },
          (error) => {
            alert(error);
          }
        );

      axios
        .post("/getWorkouts", `${[thisBind.props.location.state.getName()]}`)
        .then(
          (response) => {
            response.data.reverse();
            thisBind.setState(
              {
                data: response.data,
              },
              () => {
                this.setGraphData(this.state.currentYear.toString());
              }
            );
            console.log("all workouts: ", this.state.data);

            this.calculateStats();
          },
          (error) => {
            alert(error);
          }
        );

      axios
        .post("/getTemplates", `${[thisBind.props.location.state.getName()]}`)
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
                <p className="modal-card-title modalTitleLogRun">Run</p>
              </header>
              <section className="modal-card-body">
                <input
                  // value={this.state.storageState ? this.state.storageState.milesRan : this.state.milesRan}
                  value={this.state.milesRan}
                  onChange={this.handleChangeMiles}
                  id="milesInput"
                  className="input"
                  type="text"
                  placeholder="miles"
                ></input>

                <TimePicker
                  onChange={this.handleChangeMinutes}
                  defaultValue={moment("00:00:00", "HH:mm:ss")}
                  value={this.state.timeValue}
                />
                <div className="runButtonsDiv">
                  <button
                    onClick={this.handleStartRun}
                    id="startRunButton"
                    className={`button ${this.state.runButtonClassName}`}
                  >
                    <span className="icon is-small playButton">
                      <i className={`fa ${this.state.playOrPauseIcon}`}></i>
                    </span>
                    {/* {this.state.runButtonValue} */}
                  </button>

                  {!this.state.startedRunning ? (
                    <button
                      disabled
                      className={`button resetRunButton is-danger`}
                      onClick={this.handleResetRunButton}
                    >
                      <span className="icon is-small refreshButton">
                        <i className="fa fa-refresh"></i>
                      </span>
                      {/* reset */}
                    </button>
                  ) : (
                    <button
                      onClick={this.handleResetRunButton}
                      className={`button resetRunButton is-danger`}
                    >
                      <span className="icon is-small refreshButton">
                        <i className="fa fa-refresh"></i>
                      </span>
                      {/* reset */}
                    </button>
                  )}
                </div>
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

          {/* =========================== run submitted modal ================================= */}
          <div className={`modal ${this.state.runSubmittedModal}`}>
            <div className="modal-background modalBackgroundRunSubmitted"></div>
            <div className="modal-content modal-content-run-submitted">
              <div className="runSubmittedText forwardInAnimation">
                Run submitted!
              </div>
            </div>
          </div>
          {/* ================================================================================ */}

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
              id={this.state.hideRunButton}
              className="button"
            ></button>
            <button
              onClick={this.handleActivateExercisesModal}
              className="button is-dark is-small exploreWorkoutsButton"
            >
              Explore exercises
            </button>
          </div>

          {/*============================= exercise video modal ======================================*/}

          <div className={`modal ${this.state.exerciseVideoModalActive}`}>
            <div className="modal-background"></div>
            <div className="modal-card modalCardExerciseVideo forwardInAnimation">
              <header className="modal-card-head">
                <div>
                  <p className="modal-card-title ">
                    {`${this.capitalizeFirstLetter(
                      this.state.currentExerciseForVideo
                    )} videos`}
                  </p>
                </div>
              </header>
              <section className="modal-card-body modalCardBodyVideo">
                <div className="youtubeVideoWrapper">
                  <span className="videoTitleSpan">
                    {" "}
                    {this.state.currentVideoTitle1}
                  </span>
                  <YouTube
                    opts={this.state.opts}
                    videoId={this.state.currentVideoID1}
                    onReady={this._onReady}
                  />
                  <div className="horizontalDivider"></div>
                  <span className="videoTitleSpan">
                    {" "}
                    {this.state.currentVideoTitle2}
                  </span>
                  <YouTube
                    opts={this.state.opts}
                    videoId={this.state.currentVideoID2}
                    onReady={this._onReady}
                  />
                  <div className="horizontalDivider"></div>
                  <span className="videoTitleSpan">
                    {" "}
                    {this.state.currentVideoTitle3}
                  </span>
                  <YouTube
                    opts={this.state.opts}
                    videoId={this.state.currentVideoID3}
                    onReady={this._onReady}
                  />
                  <div className="horizontalDivider"></div>
                  <span className="videoTitleSpan">
                    {" "}
                    {this.state.currentVideoTitle4}
                  </span>
                  <YouTube
                    opts={this.state.opts}
                    videoId={this.state.currentVideoID4}
                    onReady={this._onReady}
                  />
                  <div className="horizontalDivider"></div>
                  <span className="videoTitleSpan">
                    {" "}
                    {this.state.currentVideoTitle5}
                  </span>
                  <YouTube
                    opts={this.state.opts}
                    videoId={this.state.currentVideoID5}
                    onReady={this._onReady}
                  />
                  <div className="horizontalDivider"></div>

                  <span className="videoTitleSpan">
                    {" "}
                    {this.state.currentVideoTitle6}
                  </span>
                  <YouTube
                    opts={this.state.opts}
                    videoId={this.state.currentVideoID6}
                    onReady={this._onReady}
                  />
                  <div className="horizontalDivider"></div>
                  <span className="videoTitleSpan">
                    {" "}
                    {this.state.currentVideoTitle7}
                  </span>
                  <YouTube
                    opts={this.state.opts}
                    videoId={this.state.currentVideoID7}
                    onReady={this._onReady}
                  />
                  <div className="horizontalDivider"></div>
                  <span className="videoTitleSpan">
                    {" "}
                    {this.state.currentVideoTitle8}
                  </span>
                  <YouTube
                    opts={this.state.opts}
                    videoId={this.state.currentVideoID8}
                    onReady={this._onReady}
                  />
                  <div className="horizontalDivider"></div>
                  <span className="videoTitleSpan">
                    {" "}
                    {this.state.currentVideoTitle9}
                  </span>
                  <YouTube
                    opts={this.state.opts}
                    videoId={this.state.currentVideoID9}
                    onReady={this._onReady}
                  />
                  <div className="horizontalDivider"></div>
                  <span className="videoTitleSpan">
                    {" "}
                    {this.state.currentVideoTitle10}
                  </span>
                  <YouTube
                    opts={this.state.opts}
                    videoId={this.state.currentVideoID10}
                    onReady={this._onReady}
                  />
                </div>
              </section>
              <footer className="modal-card-foot">
                <button
                  onClick={() => {
                    this.setState({
                      exercisesModalActive: "is-active",
                      exerciseVideoModalActive: "",
                    });
                  }}
                  className="button is-dark"
                >
                  Close
                </button>
              </footer>
            </div>
          </div>

          {/* ======================================================== ========================================*/}

          <div className={`modal ${this.state.exercisesModalActive}`}>
            <div className="modal-background"></div>
            <div className="modal-card modalCardExercises forwardInAnimation">
              <header className="modal-card-head">
                <p className="modal-card-title">Exercises</p>
              </header>
              <section className="modal-card-body">
                <div
                  className={
                    !this.state.muscleGroupClicked
                      ? "searchExercisesWrapperDiv"
                      : "searchExercisesWrapperDiv2"
                  }
                >
                  <span>Search Exercises</span>
                  <input
                    value={this.state.exercisesSearchValue}
                    onChange={this.handleChangeSearchExercises}
                    className="input"
                  ></input>
                  {this.state.muscleGroupClicked &&
                  this.state.exercisesSearchValue === "" ? (
                    <button
                      onClick={() => {
                        this.setState({
                          muscleGroupClicked: false,
                        });
                      }}
                      className="button is-small backButton is-info"
                    >
                      Return to muscle groups
                    </button>
                  ) : (
                    <div id="hide"></div>
                  )}
                </div>

                {!this.state.muscleGroupClicked &&
                this.state.exercisesSearchValue === "" ? (
                  <div className="muscleGroupsTitle">
                    <h4>Muscle groups</h4>
                  </div>
                ) : (
                  <div id="hide"></div>
                )}

                <div
                  className={
                    this.state.exercisesSearchValue === ""
                      ? !this.state.muscleGroupClicked
                        ? "exercisesModalBody"
                        : "exercisesModalBody2"
                      : !this.state.muscleGroupClicked
                      ? "exercisesModalBody3"
                      : "exercisesModalBody2"
                  }
                >
                  <div className="horizontalDivider"></div>

                  {!this.state.muscleGroupClicked ||
                  this.state.exercisesSearchValue !== ""
                    ? this.state.exercisesSearchValue === ""
                      ? this.state.exerciseMuscleGroups.map((muscleGroup) => {
                          return (
                            <div>
                              <div
                                onClick={() => {
                                  this.handleClickMuscleGroup(muscleGroup);
                                }}
                                className="muscleGroupText"
                              >
                                {this.capitalizeFirstLetter(muscleGroup)}
                              </div>
                              <div className="horizontalDivider"></div>
                            </div>
                          );
                        })
                      : this.state.exercises
                          .filter((exercise) => {
                            return exercise.workout.includes(
                              this.state.exercisesSearchValue
                            );
                          })
                          .map((exercise) => {
                            return (
                              <div>
                                <div
                                  onClick={() => {
                                    this.handleClickExerciseText(
                                      exercise.workout
                                    );
                                  }}
                                  className="exerciseWorkoutText"
                                >
                                  {this.capitalizeFirstLetter(exercise.workout)}
                                </div>
                                <div className="muscleGroupText2">
                                  {this.capitalizeFirstLetter(
                                    exercise.muscleGroup
                                  )}
                                </div>
                                <div className="horizontalDivider"></div>
                              </div>
                            );
                          })
                    : this.state.muscleGroupExercises.map((exercise) => {
                        return (
                          <div>
                            <div
                              onClick={() => {
                                this.handleClickExerciseText(exercise.workout);
                              }}
                              className="exerciseWorkoutText"
                            >
                              {this.capitalizeFirstLetter(exercise.workout)}
                            </div>
                            <div className="muscleGroupText2">
                              {this.capitalizeFirstLetter(exercise.muscleGroup)}
                            </div>
                            <div className="horizontalDivider"></div>
                          </div>
                        );
                      })}
                </div>
              </section>
              <footer className="modal-card-foot">
                <button
                  onClick={this.handleActivateExercisesModal}
                  className="button is-dark"
                >
                  Close
                </button>
              </footer>
            </div>
          </div>

          <div
            id={this.state.showStats}
            className="forwardInAnimation barcontainer"
          >
            <div className="barcontainerheader">
              <i
                onClick={this.handleChangeWorkoutYearGraph2}
                className="fa fa-angle-left fa-2x"
              ></i>{" "}
              <i
                onClick={this.handleChangeWorkoutYearGraph}
                className="fa fa-angle-right fa-2x"
              ></i>{" "}
              <span className="workoutYearSpan">{`Workouts ${this.state.currentYear}`}</span>
            </div>

            {/* <div className="angleLeftDiv">
              <i className="fa fa-angle-left fa-4x"></i>
            </div> */}

            {!this.state.workoutsYet ? (
              <div className="noWorkoutsYetText">no workouts yet</div>
            ) : (
              <span id="hide"></span>
            )}

            <div
              id={this.state.changingWorkoutGraphYear}
              className={`bar`}
              style={{
                height: `${this.state.workoutsPerMonthPercentages.jan}%`,
              }}
            >
              {this.state.workoutsPerMonth.jan}
              <div className="barlabel">Jan</div>
            </div>

            <div
              id={this.state.changingWorkoutGraphYear}
              className={`bar`}
              style={{
                height: `${this.state.workoutsPerMonthPercentages.feb}%`,
              }}
            >
              {this.state.workoutsPerMonth.feb}
              <div className="barlabel">Feb</div>
            </div>
            <div
              id={this.state.changingWorkoutGraphYear}
              className={`bar`}
              style={{
                height: `${this.state.workoutsPerMonthPercentages.mar}%`,
              }}
            >
              {this.state.workoutsPerMonth.mar}
              <div className="barlabel">Mar</div>
            </div>
            <div
              id={this.state.changingWorkoutGraphYear}
              className={`bar`}
              style={{
                height: `${this.state.workoutsPerMonthPercentages.apr}%`,
              }}
            >
              {this.state.workoutsPerMonth.apr}
              <div className="barlabel">Apr </div>
            </div>
            <div
              id={this.state.changingWorkoutGraphYear}
              className={`bar`}
              style={{
                height: `${this.state.workoutsPerMonthPercentages.may}%`,
              }}
            >
              {this.state.workoutsPerMonth.may}
              <div className="barlabel">May</div>
            </div>
            <div
              id={this.state.changingWorkoutGraphYear}
              className={`bar`}
              style={{
                height: `${this.state.workoutsPerMonthPercentages.jun}%`,
              }}
            >
              {this.state.workoutsPerMonth.jun}
              <div className="barlabel">Jun</div>
            </div>
            <div
              id={this.state.changingWorkoutGraphYear}
              className={`bar`}
              style={{
                height: `${this.state.workoutsPerMonthPercentages.jul}%`,
              }}
            >
              {this.state.workoutsPerMonth.jul}
              <div className="barlabel">Jul</div>
            </div>
            <div
              id={this.state.changingWorkoutGraphYear}
              className={`bar`}
              style={{
                height: `${this.state.workoutsPerMonthPercentages.aug}%`,
              }}
            >
              {this.state.workoutsPerMonth.aug}
              <div className="barlabel">Aug</div>
            </div>
            <div
              id={this.state.changingWorkoutGraphYear}
              className={`bar`}
              style={{
                height: `${this.state.workoutsPerMonthPercentages.sep}%`,
              }}
            >
              {this.state.workoutsPerMonth.sep}
              <div className="barlabel">Sep</div>
            </div>
            <div
              id={this.state.changingWorkoutGraphYear}
              className={`bar`}
              style={{
                height: `${this.state.workoutsPerMonthPercentages.oct}%`,
              }}
            >
              {this.state.workoutsPerMonth.oct}
              <div className="barlabel">Oct </div>
            </div>
            <div
              id={this.state.changingWorkoutGraphYear}
              className={`bar`}
              style={{
                height: `${this.state.workoutsPerMonthPercentages.nov}%`,
              }}
            >
              {this.state.workoutsPerMonth.nov}
              <div className="barlabel">Nov</div>
            </div>
            <div
              id={this.state.changingWorkoutGraphYear}
              className={`bar`}
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
            <div className="barcontainerheader2">
              <i
                onClick={this.handleChangeRunYearGraph2}
                className="fa fa-angle-left fa-2x"
              ></i>{" "}
              <i
                onClick={this.handleChangeRunYearGraph}
                className="fa fa-angle-right fa-2x"
              ></i>{" "}
              <span className="runYearSpan">
                {" "}
                {`Miles Ran ${this.state.currentYear2}`}
              </span>
            </div>

            {!this.state.runsYet ? (
              <div className="noRunsYetText">no runs yet</div>
            ) : (
              <span id="hide"></span>
            )}

            <div
              id={this.state.changingRunGraphYear}
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.jan}%`,
              }}
            >
              {this.state.runsPerMonth.jan}
              <div className="barlabel">Jan</div>
            </div>

            <div
              id={this.state.changingRunGraphYear}
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.feb}%`,
              }}
            >
              {this.state.runsPerMonth.feb}
              <div className="barlabel">Feb</div>
            </div>
            <div
              id={this.state.changingRunGraphYear}
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.mar}%`,
              }}
            >
              {this.state.runsPerMonth.mar}
              <div className="barlabel">Mar</div>
            </div>
            <div
              id={this.state.changingRunGraphYear}
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.apr}%`,
              }}
            >
              {this.state.runsPerMonth.apr}
              <div className="barlabel">Apr </div>
            </div>
            <div
              id={this.state.changingRunGraphYear}
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.may}%`,
              }}
            >
              {this.state.runsPerMonth.may}
              <div className="barlabel">May</div>
            </div>
            <div
              id={this.state.changingRunGraphYear}
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.jun}%`,
              }}
            >
              {this.state.runsPerMonth.jun}
              <div className="barlabel">Jun</div>
            </div>
            <div
              id={this.state.changingRunGraphYear}
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.jul}%`,
              }}
            >
              {this.state.runsPerMonth.jul}
              <div className="barlabel">Jul</div>
            </div>
            <div
              id={this.state.changingRunGraphYear}
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.aug}%`,
              }}
            >
              {this.state.runsPerMonth.aug}
              <div className="barlabel">Aug</div>
            </div>
            <div
              id={this.state.changingRunGraphYear}
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.sep}%`,
              }}
            >
              {this.state.runsPerMonth.sep}
              <div className="barlabel">Sep</div>
            </div>
            <div
              id={this.state.changingRunGraphYear}
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.oct}%`,
              }}
            >
              {this.state.runsPerMonth.oct}
              <div className="barlabel">Oct </div>
            </div>
            <div
              id={this.state.changingRunGraphYear}
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.nov}%`,
              }}
            >
              {this.state.runsPerMonth.nov}
              <div className="barlabel">Nov</div>
            </div>
            <div
              id={this.state.changingRunGraphYear}
              className="bar bar2"
              style={{
                height: `${this.state.runsPerMonthPercentages.dec}%`,
              }}
            >
              {this.state.runsPerMonth.dec}
              <div className="barlabel">Dec</div>
            </div>
          </div>

          {/* ==================================================== stats ======================================= */}

          <div
            id={this.state.showStats}
            className="forwardInAnimation barcontainer3"
          >
            <div className="barcontainerheader3">
              <span className="runYearSpan">{`Your Stats[WIP]`}</span>
            </div>

            <div className="statsTextContainer">
              <div className="statsDiv firstStatsDiv">
                <span className="statsSpan">total workouts: </span>
                {this.state.totalWorkoutsNotRuns}
              </div>
              <div className="statsDiv">
                <span className="statsSpan">workouts this year: </span>
                {this.state.totalWorkoutsNotRunsThisYear}
              </div>
              <div className="horizontalDivider"></div>
              <div className="statsDiv">
                <span className="statsSpan">total runs: </span>
                {this.state.totalRuns}
              </div>
              <div className="statsDiv">
                <span className="statsSpan">total miles ran: </span>
                {this.state.totalMilesRan}
              </div>
              {/* <div className="statsDiv">
                <span className="statsSpan">avg time per mile: </span>
                {this.state.avgTimeMile}
              </div>
              <div className="statsDiv">
                <span className="statsSpan">best avg time per mile: </span>
                {this.state.bestAvgTimeMile}
              </div>
              <div className="statsDiv">
                <span className="statsSpan">avg distance ran: </span>
                {this.state.avgDistRan}
              </div> */}
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
                  ? this.props.location.state.getName()
                  : null
              }
              quickStartSelected={this.state.quickStartSelected}
              day={this.state.day}
              hideDropDown={this.hideDropDown}
              hideThenShowRunButton={this.hideThenShowRunButton}
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
                  ? this.props.location.state.getName()
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
