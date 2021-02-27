import React, { Component } from "react";
import App from "../../App";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import Previousworkouts from "./previousworkouts";
import axios from "axios";

import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";

class WorkoutTemplates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threeDotsHide: "hide",
      threeDotsShow: "",
      planEditting: "",
      editing: false,
      name: "",
      templates: [{ templateName: "" }, { templateName: "" }],
      workoutName: "Custom",
      hideButtons: "",
      username: " ",
      workout1: [" ", " ", " "],
      workout2: [" ", " ", " "],
      workout3: [" ", " ", " "],
      workout4: [" ", " ", " "],
      workout5: [" ", " ", " "],
      workout6: [" ", " ", " "],
      workout7: [" ", " ", " "],
      notes: "",
      workoutDate: new Date(),
      submitted: false,
      clicked: false,
    };
    this.handleShowOptions = this.handleShowOptions.bind(this);

    this.handleChangeColorPicker = this.handleChangeColorPicker.bind(this);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);

    this.handleClickCreateTemplate = this.handleClickCreateTemplate.bind(this);
    this.handleChangeWorkoutName = this.handleChangeWorkoutName.bind(this);

    this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmitWorkout = this.handleSubmitWorkout.bind(this);

    this.handleChangeSquat0 = this.handleChangeSquat0.bind(this);
    this.handleChangeSquat1 = this.handleChangeSquat1.bind(this);
    this.handleChangeSquat2 = this.handleChangeSquat2.bind(this);
    this.handleChangeSquat3 = this.handleChangeSquat3.bind(this);
    this.handleChangeSquat4 = this.handleChangeSquat4.bind(this);
    this.handleChangeSquat5 = this.handleChangeSquat5.bind(this);
    this.handleChangeSquat6 = this.handleChangeSquat6.bind(this);

    this.handleChangeHipThrust0 = this.handleChangeHipThrust0.bind(this);
    this.handleChangeHipThrust1 = this.handleChangeHipThrust1.bind(this);
    this.handleChangeHipThrust2 = this.handleChangeHipThrust2.bind(this);
    this.handleChangeHipThrust3 = this.handleChangeHipThrust3.bind(this);
    this.handleChangeHipThrust4 = this.handleChangeHipThrust4.bind(this);
    this.handleChangeHipThrust5 = this.handleChangeHipThrust5.bind(this);
    this.handleChangeHipThrust6 = this.handleChangeHipThrust6.bind(this);

    this.handleChangeBenchPress0 = this.handleChangeBenchPress0.bind(this);
    this.handleChangeBenchPress1 = this.handleChangeBenchPress1.bind(this);
    this.handleChangeBenchPress2 = this.handleChangeBenchPress2.bind(this);
    this.handleChangeBenchPress3 = this.handleChangeBenchPress3.bind(this);
    this.handleChangeBenchPress4 = this.handleChangeBenchPress4.bind(this);
    this.handleChangeBenchPress5 = this.handleChangeBenchPress5.bind(this);
    this.handleChangeBenchPress6 = this.handleChangeBenchPress6.bind(this);

    this.handleChangeChinUps0 = this.handleChangeChinUps0.bind(this);
    this.handleChangeChinUps1 = this.handleChangeChinUps1.bind(this);
    this.handleChangeChinUps2 = this.handleChangeChinUps2.bind(this);
    this.handleChangeChinUps3 = this.handleChangeChinUps3.bind(this);
    this.handleChangeChinUps4 = this.handleChangeChinUps4.bind(this);
    this.handleChangeChinUps5 = this.handleChangeChinUps5.bind(this);
    this.handleChangeChinUps6 = this.handleChangeChinUps6.bind(this);

    this.handleChangeDBFarmerCarry0 = this.handleChangeDBFarmerCarry0.bind(
      this
    );
    this.handleChangeDBFarmerCarry1 = this.handleChangeDBFarmerCarry1.bind(
      this
    );
    this.handleChangeDBFarmerCarry2 = this.handleChangeDBFarmerCarry2.bind(
      this
    );
    this.handleChangeDBFarmerCarry3 = this.handleChangeDBFarmerCarry3.bind(
      this
    );
    this.handleChangeDBFarmerCarry4 = this.handleChangeDBFarmerCarry4.bind(
      this
    );
    this.handleChangeDBFarmerCarry5 = this.handleChangeDBFarmerCarry5.bind(
      this
    );
    this.handleChangeDBFarmerCarry6 = this.handleChangeDBFarmerCarry6.bind(
      this
    );

    this.handleChangeFacePulls0 = this.handleChangeFacePulls0.bind(this);
    this.handleChangeFacePulls1 = this.handleChangeFacePulls1.bind(this);
    this.handleChangeFacePulls2 = this.handleChangeFacePulls2.bind(this);
    this.handleChangeFacePulls3 = this.handleChangeFacePulls3.bind(this);
    this.handleChangeFacePulls4 = this.handleChangeFacePulls4.bind(this);
    this.handleChangeFacePulls5 = this.handleChangeFacePulls5.bind(this);
    this.handleChangeFacePulls6 = this.handleChangeFacePulls6.bind(this);

    this.handleChangeExtraWorkout0 = this.handleChangeExtraWorkout0.bind(this);
    this.handleChangeExtraWorkout1 = this.handleChangeExtraWorkout1.bind(this);
    this.handleChangeExtraWorkout2 = this.handleChangeExtraWorkout2.bind(this);

    this.handleChangeExtraWorkout3 = this.handleChangeExtraWorkout3.bind(this);
    this.handleChangeExtraWorkout4 = this.handleChangeExtraWorkout4.bind(this);
    this.handleChangeExtraWorkout5 = this.handleChangeExtraWorkout5.bind(this);
    this.handleChangeExtraWorkout6 = this.handleChangeExtraWorkout6.bind(this);

    this.handleNotes = this.handleNotes.bind(this);

    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);

    this.handleEditTemplateClick = this.handleEditTemplateClick.bind(this);

    this.handleCancelTemplateUpdate = this.handleCancelTemplateUpdate.bind(
      this
    );

    this.handleSaveChanges = this.handleSaveChanges.bind(this);
  }

  handleShowOptions(e) {
    this.setState({
      threeDotsHide: "",
      threeDotsShow: "hide",
    });
  }

  handleSaveChanges(e) {
    e.preventDefault();
    var thisBind = this;

    confirmAlert({
      title: "Save changes?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .post(
                "/deleteTemplate",
                `${[
                  this.state.planEditting,
                  thisBind.props.location.state.getName(),
                ]}`
              )
              .then((response) => {
                this.setState({
                  editing: false,
                });
                var arr = [
                  [
                    this.state.workout1,
                    this.state.workout2,
                    this.state.workout3,
                    this.state.workout4,
                    this.state.workout5,
                    this.state.workout6,
                    this.state.workout7,
                  ],
                  [this.state.notes],
                  thisBind.props.location.state.getName(),
                  this.props.day,
                  this.state.workoutName,
                ];

                var workoutNameSplit = arr[4].split("");

                for (var i = 0; i < workoutNameSplit.length; i++) {
                  if (
                    workoutNameSplit[i] === "\\" ||
                    workoutNameSplit[i] === '"'
                  ) {
                    workoutNameSplit.splice(i, 1);
                  }
                }
                arr[4] = workoutNameSplit.join("");

                for (var i = 0; i < arr.length - 3; i++) {
                  for (var j = 0; j < arr[i].length; j++) {
                    if (typeof arr[i][j] === "string") {
                      var modified = arr[i][j];
                      modified = modified.split(",").join("");
                      arr[i][j] = modified;
                    } else {
                      for (var k = 0; k < arr[i][j].length; k++) {
                        var modified = arr[i][j][k];
                        modified = modified.split(",").join("");
                        arr[i][j][k] = modified;
                      }
                    }
                  }
                }

                axios.post("/createTemplate", `${arr}`).then(
                  (response) => {
                    console.log(
                      "colorhere: ",
                      thisBind.state.planEditting,
                      thisBind.state.currentColor
                    );
                    axios
                      .post(
                        "/changeColor",
                        `${[
                          thisBind.state.planEditting,
                          thisBind.state.currentColor,
                        ]}`
                      )
                      .then((response) => {
                        axios
                          .post(
                            "/getTemplates",
                            `${[thisBind.props.location.state.getName()]}`
                          )
                          .then(
                            (response) => {
                              response.data.reverse();

                              var oldTemplates = response.data;
                              for (var i = 0; i < oldTemplates.length; i++) {
                                oldTemplates[i]["editable"] = false;
                              }
                              thisBind.setState({
                                templates: oldTemplates,
                              });

                              thisBind.setState({
                                name: thisBind.props.location.state.getName(),
                                templates: oldTemplates,
                              });
                            },
                            (error) => {
                              alert(error);
                            }
                          );
                      });

                    console.log("saved template!");
                  },
                  (error) => {
                    alert(error);
                  }
                );
                thisBind.setState({
                  workoutName: "Custom",
                  clicked: false,
                  workout1: [" ", " ", " "],
                  workout2: [" ", " ", " "],
                  workout3: [" ", " ", " "],
                  workout4: [" ", " ", " "],
                  workout5: [" ", " ", " "],
                  workout6: [" ", " ", " "],
                  workout7: [" ", " ", " "],
                  notes: "",
                });
              });
          },
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  }

  handleCancelTemplateUpdate(e) {
    const workoutPlanName = e.target.getAttribute("data-id");
    e.preventDefault();
    var oldTemplates = this.state.templates;

    for (var i = 0; i < oldTemplates.length; i++) {
      if (
        oldTemplates[i].templateName === workoutPlanName &&
        this.state.editing
      ) {
        oldTemplates[i].editable = false;
      }
    }

    this.setState({
      editing: false,
      templates: oldTemplates,
    });
  }

  handleEditTemplateClick(e) {
    this.setState({
      threeDotsHide: "hide",
      threeDotsShow: "",
    });

    e.preventDefault();
    var thisBind = this;
    const workoutPlanName = e.target.getAttribute("data-id");
    var color;

    this.setState({
      planEditting: workoutPlanName,
    });
    var template;
    for (var i = 0; i < this.state.templates.length; i++) {
      if (this.state.templates[i].templateName === workoutPlanName) {
        template = this.state.templates[i];
        color = this.state.templates[i].color;
      }
    }

    this.setState({
      currentColor: color,
    });

    console.log("color: ", color, workoutPlanName);

    if (!this.state.editing) {
      this.setState({
        workoutName: workoutPlanName,
        workout1: [
          template.workout1.split(",")[0],
          template.workout1.split(",")[1],
          template.workout1.split(",")[2],
        ],
        workout2: [
          template.workout2.split(",")[0],
          template.workout2.split(",")[1],
          template.workout2.split(",")[2],
        ],
        workout3: [
          template.workout3.split(",")[0],
          template.workout3.split(",")[1],
          template.workout3.split(",")[2],
        ],
        workout4: [
          template.workout4.split(",")[0],
          template.workout4.split(",")[1],
          template.workout4.split(",")[2],
        ],
        workout5: [
          template.workout5.split(",")[0],
          template.workout5.split(",")[1],
          template.workout5.split(",")[2],
        ],
        workout6: [
          template.workout6.split(",")[0],
          template.workout6.split(",")[1],
          template.workout6.split(",")[2],
        ],
        workout7: [
          template.workout7.split(",")[0],
          template.workout7.split(",")[1],
          template.workout7.split(",")[2],
        ],
        editing: true,
      });
    } else {
      alert(
        "Please finish editing your current template before editting another"
      );
    }

    var oldTemplates = this.state.templates;
    console.log("value: ", workoutPlanName);
    for (var i = 0; i < oldTemplates.length; i++) {
      if (
        oldTemplates[i].templateName === workoutPlanName &&
        !this.state.editing
      ) {
        oldTemplates[i].editable = true;
      }
    }
    this.setState({
      templates: oldTemplates,
    });

    console.log("templates:", this.state.templates);
    setTimeout(() => {
      console.log("updatedState: ", this.state.workout1, this.state.workout7);
    }, 1000);
  }

  handleChangeColorPicker(e) {
    e.preventDefault();
    var thisBind = this;

    var index = e.nativeEvent.target.selectedIndex;
    var color = e.nativeEvent.target[index].text;
    var workoutName = e.target.value;

    if (color !== "Color") {
      axios.post("/changeColor", `${[workoutName, color]}`).then(
        (response) => {
          console.log(response);
          axios
            .post(
              "/getTemplates",
              `${[thisBind.props.location.state.getName()]}`
            )
            .then(
              (response) => {
                response.data.reverse();

                var oldTemplates = response.data;
                for (var i = 0; i < oldTemplates.length; i++) {
                  oldTemplates[i]["editable"] = false;
                }
                thisBind.setState({
                  templates: oldTemplates,
                });
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
  }

  handleDeleteClick(e) {
    e.preventDefault();
    const thisBind = this;
    const value = e.target.getAttribute("data-id");

    confirmAlert({
      title: "Delete template?",
      buttons: [
        {
          label: "Delete",
          onClick: () => {
            thisBind.setState({
              threeDotsHide: "hide",
              threeDotsShow: "",
            });

            axios
              .post(
                "/deleteTemplate",
                `${[value, thisBind.props.location.state.getName()]}`
              )
              .then(
                (res) => {
                  if (typeof res === "object") {
                    axios
                      .post(
                        "/getTemplates",
                        `${[thisBind.props.location.state.getName()]}`
                      )
                      .then(
                        (response) => {
                          console.log(response.data);
                          response.data.reverse();

                          var oldTemplates = response.data;
                          for (var i = 0; i < oldTemplates.length; i++) {
                            oldTemplates[i]["editable"] = false;
                          }

                          thisBind.setState({
                            templates: oldTemplates,
                          });
                        },
                        (error) => {
                          alert(error);
                        }
                      );

                    console.log("deleted!");
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

  handleClickCreateTemplate(e) {
    e.preventDefault();
    this.setState({
      clicked: true,
    });
  }

  handleChangeWorkoutName(e) {
    e.preventDefault();
    this.setState({
      workoutName: e.target.value,
    });
    if (e.target.value === "" || e.target.value === " ") {
      this.setState({
        workoutName: e.target.getAttribute("data-id"),
      });
    }
  }

  handleHomeClick() {
    // this.props.hideDropDown();
    // this.props.hideNav();
    this.setState({
      hideButtons: "hide",
    });
  }

  handlePreviousClick() {
    // this.props.hideDropDown();
    // this.props.hideNav();
    this.setState({
      hideButtons: "hide",
    });
  }

  handleNotes(e) {
    var thisBind = this;
    e.preventDefault();
    this.setState({
      notes: e.target.value,
    });
  }

  handleDateChange(e) {
    var thisBind = this;
    e.preventDefault();
    var workoutDate = e.target.value;
    thisBind.setState({
      workoutDate: workoutDate,
    });
  }

  handleChangeSquat0(e) {
    e.preventDefault();
    this.state.workout1[0] = e.target.value;
  }

  handleChangeSquat1(e) {
    e.preventDefault();
    this.state.workout1[1] = e.target.value;
  }

  handleChangeSquat2(e) {
    e.preventDefault();
    this.state.workout1[2] = e.target.value;
  }

  handleChangeSquat3(e) {
    e.preventDefault();
    this.state.workout1[3] = e.target.value;
  }

  handleChangeSquat4(e) {
    e.preventDefault();
    this.state.workout1[4] = e.target.value;
  }

  handleChangeSquat5(e) {
    e.preventDefault();
    this.state.workout1[5] = e.target.value;
  }

  handleChangeSquat6(e) {
    e.preventDefault();
    this.state.workout1[6] = e.target.value;
  }

  handleChangeHipThrust0(e) {
    e.preventDefault();
    this.state.workout2[0] = e.target.value;
  }

  handleChangeHipThrust1(e) {
    e.preventDefault();
    this.state.workout2[1] = e.target.value;
  }

  handleChangeHipThrust2(e) {
    e.preventDefault();
    this.state.workout2[2] = e.target.value;
  }

  handleChangeHipThrust3(e) {
    e.preventDefault();
    this.state.workout2[3] = e.target.value;
  }
  handleChangeHipThrust4(e) {
    e.preventDefault();
    this.state.workout2[4] = e.target.value;
  }
  handleChangeHipThrust5(e) {
    e.preventDefault();
    this.state.workout2[5] = e.target.value;
  }
  handleChangeHipThrust6(e) {
    e.preventDefault();
    this.state.workout2[6] = e.target.value;
  }

  handleChangeBenchPress0(e) {
    e.preventDefault();
    this.state.workout3[0] = e.target.value;
  }

  handleChangeBenchPress1(e) {
    e.preventDefault();
    this.state.workout3[1] = e.target.value;
  }

  handleChangeBenchPress2(e) {
    e.preventDefault();
    this.state.workout3[2] = e.target.value;
  }
  handleChangeBenchPress3(e) {
    e.preventDefault();
    this.state.workout3[3] = e.target.value;
  }
  handleChangeBenchPress4(e) {
    e.preventDefault();
    this.state.workout3[4] = e.target.value;
  }
  handleChangeBenchPress5(e) {
    e.preventDefault();
    this.state.workout3[5] = e.target.value;
  }
  handleChangeBenchPress6(e) {
    e.preventDefault();
    this.state.workout3[6] = e.target.value;
  }
  handleChangeChinUps0(e) {
    e.preventDefault();
    this.state.workout4[0] = e.target.value;
  }
  handleChangeChinUps1(e) {
    e.preventDefault();
    this.state.workout4[1] = e.target.value;
  }
  handleChangeChinUps2(e) {
    e.preventDefault();
    this.state.workout4[2] = e.target.value;
  }

  handleChangeChinUps3(e) {
    e.preventDefault();
    this.state.workout4[3] = e.target.value;
  }
  handleChangeChinUps4(e) {
    e.preventDefault();
    this.state.workout4[4] = e.target.value;
  }
  handleChangeChinUps5(e) {
    e.preventDefault();
    this.state.workout4[5] = e.target.value;
  }
  handleChangeChinUps6(e) {
    e.preventDefault();
    this.state.workout4[6] = e.target.value;
  }

  handleChangeDBFarmerCarry0(e) {
    e.preventDefault();
    this.state.workout5[0] = e.target.value;
  }

  handleChangeDBFarmerCarry1(e) {
    e.preventDefault();
    this.state.workout5[1] = e.target.value;
  }

  handleChangeDBFarmerCarry2(e) {
    e.preventDefault();
    this.state.workout5[2] = e.target.value;
  }

  handleChangeDBFarmerCarry3(e) {
    e.preventDefault();
    this.state.workout5[3] = e.target.value;
  }
  handleChangeDBFarmerCarry4(e) {
    e.preventDefault();
    this.state.workout5[4] = e.target.value;
  }
  handleChangeDBFarmerCarry5(e) {
    e.preventDefault();
    this.state.workout5[5] = e.target.value;
  }
  handleChangeDBFarmerCarry6(e) {
    e.preventDefault();
    this.state.workout5[6] = e.target.value;
  }

  handleChangeFacePulls0(e) {
    e.preventDefault();
    this.state.workout6[0] = e.target.value;
  }

  handleChangeFacePulls1(e) {
    e.preventDefault();
    this.state.workout6[1] = e.target.value;
  }

  handleChangeFacePulls2(e) {
    e.preventDefault();
    this.state.workout6[2] = e.target.value;
  }
  handleChangeFacePulls3(e) {
    e.preventDefault();
    this.state.workout6[3] = e.target.value;
  }
  handleChangeFacePulls4(e) {
    e.preventDefault();
    this.state.workout6[4] = e.target.value;
  }
  handleChangeFacePulls5(e) {
    e.preventDefault();
    this.state.workout6[5] = e.target.value;
  }
  handleChangeFacePulls6(e) {
    e.preventDefault();
    this.state.workout6[6] = e.target.value;
  }

  handleChangeExtraWorkout3(e) {
    e.preventDefault();
    this.state.workout7[3] = e.target.value;
  }
  handleChangeExtraWorkout4(e) {
    e.preventDefault();
    this.state.workout7[4] = e.target.value;
  }
  handleChangeExtraWorkout5(e) {
    e.preventDefault();
    this.state.workout7[5] = e.target.value;
  }
  handleChangeExtraWorkout6(e) {
    e.preventDefault();
    this.state.workout7[6] = e.target.value;
  }

  handleChangeExtraWorkout0(e) {
    e.preventDefault();
    this.state.workout7[0] = e.target.value;
  }

  handleChangeExtraWorkout1(e) {
    e.preventDefault();
    this.state.workout7[1] = e.target.value;
  }

  handleChangeExtraWorkout2(e) {
    e.preventDefault();
    this.state.workout7[2] = e.target.value;
  }

  handleChangeDatePicker = (date) => {
    this.setState({
      workoutDate: date,
    });
  };

  componentDidMount() {
    var thisBind = this;

    if (this.props.location.state !== undefined) {
      axios
        .post("/getTemplates", `${[thisBind.props.location.state.getName()]}`)
        .then(
          (response) => {
            response.data.reverse();

            thisBind.setState({
              name: thisBind.props.location.state.getName(),
              templates: response.data,
            });
            var oldTemplates = this.state.templates;
            for (var i = 0; i < oldTemplates.length; i++) {
              oldTemplates[i]["editable"] = false;
            }
            thisBind.setState({
              templates: oldTemplates,
            });
          },
          (error) => {
            alert(error);
          }
        );
    } else {
      this.props.history.push("/Home");
    }
    setTimeout(() => console.log("temps: ", this.state.templates), 2000);
  }

  handleSubmitWorkout(e) {
    var thisBind = this;
    e.preventDefault();

    confirmAlert({
      title: "Create template?",
      buttons: [
        {
          label: "Submit",
          onClick: () => {
            // this.props.hideDropDown();
            // this.props.hideNav();
            this.setState({
              submitted: true,
            });
            var arr = [
              [
                this.state.workout1,
                this.state.workout2,
                this.state.workout3,
                this.state.workout4,
                this.state.workout5,
                this.state.workout6,
                this.state.workout7,
              ],
              [this.state.notes],
              this.props.location.state.getName(),
              this.props.day,
              this.state.workoutName,
            ];

            for (var i = 0; i < arr.length - 3; i++) {
              for (var j = 0; j < arr[i].length; j++) {
                if (typeof arr[i][j] === "string") {
                  var modified = arr[i][j];
                  modified = modified.split(",").join("");
                  arr[i][j] = modified;
                } else {
                  for (var k = 0; k < arr[i][j].length; k++) {
                    var modified = arr[i][j][k];
                    modified = modified.split(",").join("");
                    arr[i][j][k] = modified;
                  }
                }
              }
            }

            axios.post("/createTemplate", `${arr}`).then(
              (response) => {
                axios
                  .post(
                    "/getTemplates",
                    `${[thisBind.props.location.state.getName()]}`
                  )
                  .then(
                    (response) => {
                      response.data.reverse();

                      var oldTemplates = response.data;
                      for (var i = 0; i < oldTemplates.length; i++) {
                        oldTemplates[i]["editable"] = false;
                      }

                      thisBind.setState({
                        name: thisBind.props.location.state.getName(),
                        templates: oldTemplates,
                      });
                    },
                    (error) => {
                      alert(error);
                    }
                  );
                console.log("saved template!");
              },
              (error) => {
                alert(error);
              }
            );
            thisBind.setState({
              workoutName: "Custom",
              clicked: false,
              workout1: [" ", " ", " "],
              workout2: [" ", " ", " "],
              workout3: [" ", " ", " "],
              workout4: [" ", " ", " "],
              workout5: [" ", " ", " "],
              workout6: [" ", " ", " "],
              workout7: [" ", " ", " "],
              notes: "",
            });
          },
        },
        {
          label: "Cancel",
          onClick: () => console.log("user clicked no"),
        },
      ],
    });
  }

  render() {
    const templates = this.state.templates.map((template, index) => {
      if (template.templateName.length > 0) {
        return (
          <div className="block forwardInAnimation templatesWrapper">
            <section id={`${template.color}2`} className="hero roundedCorners">
              <div className="hero-body heroBody">
                <div className="container">
                  <div id={this.state.threeDotsHide}>
                    <span
                      data-id={template.templateName}
                      data-attr={template.color}
                      onClick={this.handleDeleteClick}
                      className="delete is-medium deleteButton forwardInAnimation"
                    ></span>
                  </div>

                  <div id={this.state.threeDotsShow}>
                    <span
                      onClick={this.handleShowOptions}
                      className="fa fa-ellipsis-v threeDots"
                    ></span>
                  </div>

                  {template.color === "Black" ||
                  template.color === "Blue" ||
                  template.color === "Red" ? (
                    <span
                      id="whiteText"
                      className="title heroTitle is-small templateTitle"
                    >
                      {template.templateName.slice(
                        1,
                        template.templateName.length - 1
                      )}

                      {/* <span className='colorWheel'></span> */}

                      <span id={this.state.threeDotsHide}>
                        <span
                          id="colorSelector"
                          className="forwardInAnimation field selector"
                        >
                          <span className="select">
                            <select
                              id="Gray2"
                              onChange={this.handleChangeColorPicker}
                            >
                              <option>{template.color}</option>
                              <option value={template.templateName}>
                                Green
                              </option>
                              <option value={template.templateName}>
                                Blue
                              </option>
                              <option value={template.templateName}>
                                Turquoise
                              </option>
                              <option value={template.templateName}>
                                Yellow
                              </option>
                              <option value={template.templateName}>
                                Cyan
                              </option>
                              <option value={template.templateName}>Red</option>
                              <option value={template.templateName}>
                                Black
                              </option>
                              <option value={template.templateName}>
                                Gray
                              </option>
                            </select>
                          </span>
                        </span>

                        <span
                          data-id={template.templateName}
                          onClick={this.handleEditTemplateClick}
                          className="forwardInAnimation editButton2 fa fa-edit fa-2x"
                        ></span>
                      </span>
                    </span>
                  ) : (
                    <span
                      id="heroTitle"
                      className="title heroTitle templateTitle"
                    >
                      {template.templateName.slice(
                        1,
                        template.templateName.length - 1
                      )}

                      <span id={this.state.threeDotsHide}>
                        <span
                          id="colorSelector"
                          className="forwardInAnimation field selector"
                        >
                          <span className="select ">
                            <select onChange={this.handleChangeColorPicker}>
                              <option>{template.color}</option>
                              <option value={template.templateName}>
                                Green
                              </option>
                              <option value={template.templateName}>
                                Blue
                              </option>
                              <option value={template.templateName}>
                                Turquoise
                              </option>
                              <option value={template.templateName}>
                                Yellow
                              </option>
                              <option value={template.templateName}>
                                Cyan
                              </option>
                              <option value={template.templateName}>Red</option>
                              <option value={template.templateName}>
                                Black
                              </option>
                              <option value={template.templateName}>
                                Gray
                              </option>
                            </select>
                          </span>
                        </span>
                        <span
                          data-id={template.templateName}
                          onClick={this.handleEditTemplateClick}
                          id="editButton1"
                          className="forwardInAnimation editButton fa fa-edit fa-2x"
                        ></span>
                      </span>
                    </span>
                  )}

                  {this.state.templates[index].editable === false ? (
                    <table
                      id="customTable2"
                      className="content is-small table is-bordered"
                    >
                      <thead id="workoutheader">
                        <tr id="workoutHeader4">
                          <th>Workout</th>
                          <th>Sets</th>
                          <th>Reps</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{template.workout1.split(",")[0]}</td>
                          <td>{template.workout1.split(",")[1]}</td>
                          <td>{template.workout1.split(",")[2]}</td>
                        </tr>
                        <tr>
                          <td>{template.workout2.split(",")[0]}</td>
                          <td>{template.workout2.split(",")[1]}</td>
                          <td>{template.workout2.split(",")[2]}</td>
                        </tr>
                        <tr>
                          <td>{template.workout3.split(",")[0]}</td>
                          <td>{template.workout3.split(",")[1]}</td>
                          <td>{template.workout3.split(",")[2]}</td>
                        </tr>
                        <tr>
                          <td>{template.workout4.split(",")[0]}</td>
                          <td>{template.workout4.split(",")[1]}</td>
                          <td>{template.workout4.split(",")[2]}</td>
                        </tr>
                        <tr>
                          <td>{template.workout5.split(",")[0]}</td>
                          <td>{template.workout5.split(",")[1]}</td>
                          <td>{template.workout5.split(",")[2]}</td>
                        </tr>
                        <tr>
                          <td>{template.workout6.split(",")[0]}</td>
                          <td>{template.workout6.split(",")[1]}</td>
                          <td>{template.workout6.split(",")[2]}</td>
                        </tr>
                        <tr>
                          <td>{template.workout7.split(",")[0]}</td>
                          <td>{template.workout7.split(",")[1]}</td>
                          <td>{template.workout7.split(",")[2]}</td>
                        </tr>
                      </tbody>
                    </table>
                  ) : (
                    <div className="modal templateModal is-active">
                      <div className="modal-background"></div>
                      <div id="modalCardTemplate" className="modal-card">
                        <header className="modal-card-head">
                          <p className="modal-card-title modalTitle">
                            <input
                              data-id={template.templateName}
                              placeholder={template.templateName.slice(
                                1,
                                template.templateName.length - 1
                              )}
                              className="modalInputBoxTitle"
                              onChange={this.handleChangeWorkoutName}
                              type="text"
                            ></input>
                          </p>
                        </header>
                        <section className="modal-card-body">
                          <div>
                            <form autocomplete="off">
                              <table
                                id="customTable4"
                                className="forwardInAnimation content is-small table is-bordered"
                              >
                                <thead id="workoutheader">
                                  <tr id="workoutHeader4">
                                    <th>Workout</th>
                                    <th>Sets</th>
                                    <th>Reps</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout1.split(",")[0]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeSquat0}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout1.split(",")[1]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeSquat1}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout1.split(",")[2]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeSquat2}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout2.split(",")[0]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeHipThrust0}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout2.split(",")[1]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeHipThrust1}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout2.split(",")[2]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeHipThrust2}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout3.split(",")[0]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeBenchPress0}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout3.split(",")[1]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeBenchPress1}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout3.split(",")[2]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeBenchPress2}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout4.split(",")[0]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeChinUps0}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout4.split(",")[1]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeChinUps1}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout4.split(",")[2]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeChinUps2}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout5.split(",")[0]
                                        }
                                        id="tdinput"
                                        onChange={
                                          this.handleChangeDBFarmerCarry0
                                        }
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout5.split(",")[1]
                                        }
                                        id="tdinput"
                                        onChange={
                                          this.handleChangeDBFarmerCarry1
                                        }
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout5.split(",")[2]
                                        }
                                        id="tdinput"
                                        onChange={
                                          this.handleChangeDBFarmerCarry2
                                        }
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout6.split(",")[0]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeFacePulls0}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout6.split(",")[1]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeFacePulls1}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout6.split(",")[2]
                                        }
                                        id="tdinput"
                                        onChange={this.handleChangeFacePulls2}
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout7.split(",")[0]
                                        }
                                        id="tdinput"
                                        onChange={
                                          this.handleChangeExtraWorkout0
                                        }
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout7.split(",")[1]
                                        }
                                        id="tdinput"
                                        onChange={
                                          this.handleChangeExtraWorkout1
                                        }
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                    <td>
                                      <input
                                        placeholder={
                                          template.workout7.split(",")[2]
                                        }
                                        id="tdinput"
                                        onChange={
                                          this.handleChangeExtraWorkout2
                                        }
                                        type="text"
                                        className="input"
                                      ></input>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </form>
                          </div>
                        </section>
                        <footer className="modal-card-foot">
                          <button
                            onClick={this.handleSaveChanges}
                            className="button is-success"
                          >
                            Save changes
                          </button>
                          <button
                            data-id={template.templateName}
                            onClick={this.handleCancelTemplateUpdate}
                            className="button"
                          >
                            Cancel
                          </button>
                        </footer>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        );
      }
    });

    if (this.state.clicked === false) {
      return (
        <div className="block">
          <nav className="nav">
            <div className="nav-right nav-menu">
              <div className="nav-item">
                <div className="field is-grouped">
                  <p className="control"></p>
                </div>
              </div>
            </div>
          </nav>

          <div className="block">
            <div id="createTemplateButton1" className="buttonContainer">
              <div
                onClick={this.handleClickCreateTemplate}
                id="loginButton"
                className=" marginbottom createTemplateButton is-dark"
              >
                <i className="fa fa-plus fa-xs plusSign" aria-hidden="true"></i>
              </div>
            </div>

            {this.state.templates.length === 0 ? (
              <div className="noTemplatesText forwardInAnimation">
                No templates yet! Press the plus sign to create your first
                template
              </div>
            ) : (
              <div id="hide"></div>
            )}

            {templates}

            {/* <div>

<section className="hero">
  <div className="hero-body">
    <div className="container">
      <span className='span1'></span>
      <h1 className="title">h1</h1>
      <h2 className="subtitle">h2</h2>
    </div>
  </div>
</section>
</div> */}
          </div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="block forwardInAnimation ">
            <form autocomplete="off">
              <div class="block nameYourWorkout templateName">
                <form>
                  <div class="field">
                    <input
                      onChange={this.handleChangeWorkoutName}
                      type="text"
                      class="input"
                      placeholder="Template Name"
                    ></input>
                  </div>
                </form>
              </div>

              <table
                id="customTable"
                className="margin content is-small table is-bordered is-striped"
              >
                <thead id="workoutheader">
                  <tr>
                    <th>Workout</th>
                    <th>Sets</th>
                    <th>Reps</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeSquat0}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeSquat1}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeSquat2}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeHipThrust0}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeHipThrust1}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeHipThrust2}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        id="tdinput"
                        onChange={this.handleChangeBenchPress0}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      <input
                        id="tdinput"
                        onChange={this.handleChangeBenchPress1}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      <input
                        id="tdinput"
                        onChange={this.handleChangeBenchPress2}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeChinUps0}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeChinUps1}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeChinUps2}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeDBFarmerCarry0}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeDBFarmerCarry1}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeDBFarmerCarry2}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeFacePulls0}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeFacePulls1}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <input
                        id="tdinput"
                        onChange={this.handleChangeFacePulls2}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        id="tdinput"
                        onChange={this.handleChangeExtraWorkout0}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      <input
                        id="tdinput"
                        onChange={this.handleChangeExtraWorkout1}
                        type="text"
                        className="input"
                      ></input>
                    </td>
                    <td>
                      <input
                        id="tdinput"
                        onChange={this.handleChangeExtraWorkout2}
                        type="text"
                        className="input"
                      ></input>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>

              <button
                onClick={this.handleSubmitWorkout}
                href=""
                className="margin button is-danger"
              >
                {" "}
                <span className="icon is-small">
                  <i className="fa fa-check"></i>
                </span>
                <span> Create template</span>
              </button>
            </form>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default WorkoutTemplates;
