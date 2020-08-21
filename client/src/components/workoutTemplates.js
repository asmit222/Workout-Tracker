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
import axios from 'axios';

import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';




class WorkoutTemplates extends Component {
  constructor(props) {
    super (props);
    this.state = {
      workoutName: 'Custom',
      hideButtons: '',
      username: ' ',
      workout1: [" ", " ", " "],
      workout2: [" ", " ", " "],
      workout3: [" ", " ", " "],
      workout4: [" ", " ", " "],
      workout5: [
        " ",
        " ",
        " ",
      ],
      workout6: [" ", " ", " "],
      workout7: [" ", " ", " "],
      notes: "",
      workoutDate: new Date(),
      submitted: false,
clicked: false,
    }
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
  }

handleClickCreateTemplate(e) {
  e.preventDefault();
  this.setState({
    clicked: true,
  })
}


handleChangeWorkoutName(e) {
  e.preventDefault();
  this.setState({
    workoutName: e.target.value,
  })
}

handleHomeClick () {

  // this.props.hideDropDown();
  // this.props.hideNav();
  this.setState({
    hideButtons: 'hide',
  })
}

handlePreviousClick () {

  // this.props.hideDropDown();
  // this.props.hideNav();
  this.setState({
    hideButtons: 'hide',
  })
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

handleChangeDatePicker = date => {
  this.setState({
    workoutDate: date
  });
};

handleSubmitWorkout(e) {
  var thisBind = this;
  e.preventDefault();

  confirmAlert({
    title: 'Create template?',
    buttons: [
      {
        label: 'Submit',
        onClick: () => {
          // this.props.hideDropDown();
          // this.props.hideNav();
          this.setState({
            submitted: true,
          })
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
            this.props.location.state.name,
            this.props.day,
            this.state.workoutName,
          ];

         for (var i = 0; i < arr.length - 3; i++) {
           for (var j = 0; j < arr[i].length; j++) {
             if(typeof arr[i][j] === 'string') {
               var modified = arr[i][j];
               modified = modified.split(',').join('');
               arr[i][j] = modified;
             } else {
               for (var k = 0; k < arr[i][j].length; k++) {
                var modified = arr[i][j][k];
                modified = modified.split(',').join('');
                arr[i][j][k] = modified;
               }
             }
           }
         }

          axios.post('/createTemplate',
          `${arr}`
        )
        .then((response) => {
          console.log('workout sent for Custom Workout!')
        }, (error) => {
          alert(error);
        });
        }
      },
      {
        label: 'Cancel',
        onClick: () => console.log('user clicked no')
      }
    ]
  });
}

  render() {
if(this.state.clicked === false) {
    return (
      <div className='block'>

<nav className="nav">
  <div className="nav-right nav-menu">
    <div className="nav-item">
      <div className="field is-grouped">
      <p className="control">

      <div className='buttonContainer '>
            <button  onClick={this.handleClickCreateTemplate} id='loginButton' className="is-rounded button marginbottom createTemplateButton newWorkoutButton button is-dark is-large">
              <span >Create Template</span>
            </button>
      </div>

        </p>

      </div>
    </div>
  </div>
</nav>

      </div>
    );
  } else {
    return (


<React.Fragment>
        <div className="block">
          <form autocomplete="off">

          <div class="block nameYourWorkout templateName">
      <form>
        <div class="field">
          <input onChange={this.handleChangeWorkoutName} type="text" class="input" placeholder="Template Name"></input>
        </div>





      </form>
    </div>

            <table id='customTable' className="margin content is-small table is-bordered is-striped">
              <thead id="workoutheader">
                <tr>
                  <th>Workout</th>
                  <th>Sets</th>
                  <th>Reps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>  <input
                      id="tdinput"
                      onChange={this.handleChangeSquat0}
                      type="text"
                      className="input"
                    ></input></td>
                  <td>  <input
                      id="tdinput"
                      onChange={this.handleChangeSquat1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td>  <input
                      id="tdinput"
                      onChange={this.handleChangeSquat2}
                      type="text"
                      className="input"
                    ></input></td>


                </tr>
                <tr>
                  <td> <input
                      id="tdinput"
                      onChange={this.handleChangeHipThrust0}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                      id="tdinput"
                      onChange={this.handleChangeHipThrust1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                      id="tdinput"
                      onChange={this.handleChangeHipThrust2}
                      type="text"
                      className="input"
                    ></input></td>

                </tr>
                <tr>
                  <td><input
                      id="tdinput"
                      onChange={this.handleChangeBenchPress0}
                      type="text"
                      className="input"
                    ></input></td>
                  <td><input
                      id="tdinput"
                      onChange={this.handleChangeBenchPress1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td><input
                      id="tdinput"
                      onChange={this.handleChangeBenchPress2}
                      type="text"
                      className="input"
                    ></input></td>

                </tr>
                <tr>
                  <td> <input
                      id="tdinput"
                      onChange={this.handleChangeChinUps0}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                      id="tdinput"
                      onChange={this.handleChangeChinUps1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                      id="tdinput"
                      onChange={this.handleChangeChinUps2}
                      type="text"
                      className="input"
                    ></input></td>

                </tr>
                <tr>
                  <td> <input
                      id="tdinput"
                      onChange={this.handleChangeDBFarmerCarry0}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                      id="tdinput"
                      onChange={this.handleChangeDBFarmerCarry1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                      id="tdinput"
                      onChange={this.handleChangeDBFarmerCarry2}
                      type="text"
                      className="input"
                    ></input></td>

                </tr>
                <tr>
                  <td> <input
                      id="tdinput"
                      onChange={this.handleChangeFacePulls0}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                      id="tdinput"
                      onChange={this.handleChangeFacePulls1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                      id="tdinput"
                      onChange={this.handleChangeFacePulls2}
                      type="text"
                      className="input"
                    ></input></td>

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
                  <td><input
                      id="tdinput"
                      onChange={this.handleChangeExtraWorkout1}
                      type="text"
                      className="input"
                    ></input></td>
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
              Create template
            </button>
          </form>
        </div>
      </React.Fragment>


    )
  }
  }
}

export default WorkoutTemplates;