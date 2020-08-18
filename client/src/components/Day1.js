import React, { Component } from "react";
import Previousworkouts from "./previousworkouts";
import { Prompt } from "react-router";
import $ from 'jquery';

class Day1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ' ',
      workoutDate: null,
      workout1: ["Squat", "3", "5", "   ", "   ", "   ", "   "],
      workout2: ["Hip Thrust", "3-4", "10-12", "   ", "   ", "   ", "   "],
      workout3: ["Bench Press", "3", "5", "   ", "   ", "   ", "   "],
      workout4: ["Chin Ups", "3", "6-10", "   ", "   ", "   ", "   "],
      workout5: [
        "DB Farmer Carry",
        "3",
        "50 steps",
        "   ",
        "   ",
        "   ",
        "   ",
      ],
      workout6: ["Face Pulls", "2", "12", "   ", "   ", "   ", "   "],
      workout7: ["    ", "   ", "   ", "   ", "   ", "   ", "   "],
      notes: "",
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmitWorkout = this.handleSubmitWorkout.bind(this);

    this.handleChangeSquat3 = this.handleChangeSquat3.bind(this);
    this.handleChangeSquat4 = this.handleChangeSquat4.bind(this);
    this.handleChangeSquat5 = this.handleChangeSquat5.bind(this);
    this.handleChangeSquat6 = this.handleChangeSquat6.bind(this);

    this.handleChangeHipThrust3 = this.handleChangeHipThrust3.bind(this);
    this.handleChangeHipThrust4 = this.handleChangeHipThrust4.bind(this);
    this.handleChangeHipThrust5 = this.handleChangeHipThrust5.bind(this);
    this.handleChangeHipThrust6 = this.handleChangeHipThrust6.bind(this);

    this.handleChangeBenchPress3 = this.handleChangeBenchPress3.bind(this);
    this.handleChangeBenchPress4 = this.handleChangeBenchPress4.bind(this);
    this.handleChangeBenchPress5 = this.handleChangeBenchPress5.bind(this);
    this.handleChangeBenchPress6 = this.handleChangeBenchPress6.bind(this);

    this.handleChangeChinUps3 = this.handleChangeChinUps3.bind(this);
    this.handleChangeChinUps4 = this.handleChangeChinUps4.bind(this);
    this.handleChangeChinUps5 = this.handleChangeChinUps5.bind(this);
    this.handleChangeChinUps6 = this.handleChangeChinUps6.bind(this);

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

    this.handleChangeFacePulls3 = this.handleChangeFacePulls3.bind(this);
    this.handleChangeFacePulls4 = this.handleChangeFacePulls4.bind(this);
    this.handleChangeFacePulls5 = this.handleChangeFacePulls5.bind(this);
    this.handleChangeFacePulls6 = this.handleChangeFacePulls6.bind(this);

    this.handleChangeExtraWorkout0 = this.handleChangeExtraWorkout0.bind(this);
    this.handleChangeExtraWorkout2 = this.handleChangeExtraWorkout2.bind(this);

    this.handleChangeExtraWorkout3 = this.handleChangeExtraWorkout3.bind(this);
    this.handleChangeExtraWorkout4 = this.handleChangeExtraWorkout4.bind(this);
    this.handleChangeExtraWorkout5 = this.handleChangeExtraWorkout5.bind(this);
    this.handleChangeExtraWorkout6 = this.handleChangeExtraWorkout6.bind(this);

    this.handleNotes = this.handleNotes.bind(this);
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

  handleChangeExtraWorkout2(e) {
    e.preventDefault();
    this.state.workout7[2] = e.target.value;
  }

  handleSubmitWorkout(e) {
    var thisBind = this;
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: 'http://localhost:2020/test',
      data: `${[
        [this.state.workoutDate],
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
        this.props.name,
      ]}`,
      success: console.log('workout sent!'),
      dataType: 'json'
    });

  }

  render() {
    return (
      <React.Fragment>
        <Prompt when={true === true} message="Discard workout?" />
        <div className="block">
          <form autocomplete="off">
            <div id="datefornewworkout" className="field">
              <label className="label">Date</label>
              <input
                onChange={this.handleDateChange}
                type="text"
                className="input"
                placeholder="mm/dd/yyyy"
              ></input>
            </div>

            <table className="margin content is-small table is-bordered">
              <thead id="workoutheader">
                <tr>
                  <th>Workout</th>
                  <th>Sets</th>
                  <th>Reps</th>
                  <th>Set 1</th>
                  <th>Set 2</th>
                  <th>Set 3</th>
                  <th>Set 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Squat</td>
                  <td>3</td>
                  <td>5</td>
                  <td>
                    {" "}
                    <input
                      id="tdinput"
                      onChange={this.handleChangeSquat3}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeSquat4}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeSquat5}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeSquat6}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>Hip Thrust</td>
                  <td>3-4</td>
                  <td>10-12</td>
                  <td>
                    {" "}
                    <input
                      id="tdinput"
                      onChange={this.handleChangeHipThrust3}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeHipThrust4}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeHipThrust5}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeHipThrust6}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>Bench Press</td>
                  <td>3</td>
                  <td>5-6</td>
                  <td>
                    {" "}
                    <input
                      id="tdinput"
                      onChange={this.handleChangeBenchPress3}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeBenchPress4}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeBenchPress5}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeBenchPress6}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>Chin Ups</td>
                  <td>3</td>
                  <td>6-10</td>
                  <td>
                    {" "}
                    <input
                      id="tdinput"
                      onChange={this.handleChangeChinUps3}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeChinUps4}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeChinUps5}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeChinUps6}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>DB Farmer Carry</td>
                  <td>3</td>
                  <td>50 steps</td>
                  <td>
                    {" "}
                    <input
                      id="tdinput"
                      onChange={this.handleChangeDBFarmerCarry3}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeDBFarmerCarry4}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeDBFarmerCarry5}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeDBFarmerCarry6}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>Face Pulls</td>
                  <td>2</td>
                  <td>12</td>
                  <td>
                    {" "}
                    <input
                      id="tdinput"
                      onChange={this.handleChangeFacePulls3}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeFacePulls4}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeFacePulls5}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeFacePulls6}
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
                  <td>3</td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeExtraWorkout2}
                      type="text"
                      className="input"
                    ></input>{" "}
                  </td>
                  <td>
                    {" "}
                    <input
                      id="tdinput"
                      onChange={this.handleChangeExtraWorkout3}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeExtraWorkout4}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeExtraWorkout5}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td>
                    <input
                      id="tdinput"
                      onChange={this.handleChangeExtraWorkout6}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>

            <form>
              <div className="field">
                <label className="label">Notes</label>
                <p className="control">
                  <textarea
                    onChange={this.handleNotes}
                    className="textarea"
                    placeholder="Write down any workout notes here"
                  ></textarea>
                </p>
              </div>
            </form>

            <button
              onClick={this.handleSubmitWorkout}
              href=""
              className="margin button is-danger"
            >
              Submit workout
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Day1;
