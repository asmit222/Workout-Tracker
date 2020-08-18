import React, { Component } from "react";
import Previousworkouts from "./previousworkouts";
import Day1 from "./Day1";

class newworkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 1,
      day1Selected: "hide",
    };
    this.handleDaySelection = this.handleDaySelection.bind(this);
  }

  handleDaySelection(e) {
    var thisBind = this;
    e.preventDefault();
    var newDay = e.target.value;
    thisBind.setState({
      day: newDay,
    });
    if (newDay === "Day 1") {
      thisBind.setState({
        day1Selected: "show",
      });
    } else {
      thisBind.setState({
        day1Selected: "hide",
      });
    }
  }

  render() {
    return (
      <div className="block">
        <div className="field">
          <label className="label">Workout</label>
          <p className="control">
            <span className="select">
              <select
                onChange={this.handleDaySelection}
                value={this.state.value}
              >
                <option>Select a workout</option>
                <option>Day 1</option>
                <option>Day 2</option>
                <option>Day 3</option>
                <option>Day 4</option>
              </select>
            </span>
          </p>
        </div>

        <div id={this.state.day1Selected}>
          <Day1 />
        </div>
      </div>
    );
  }
}

export default newworkout;
