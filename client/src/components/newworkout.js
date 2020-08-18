import React, { Component } from "react";
import Previousworkouts from "./previousworkouts";
import Day1 from "./Day1";
import EmptyTemplate from "./emptyTemplate";

var newDay;

class newworkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day1Selected: "hide",
      emptyTemplateSelected: "hide1",
    };
    this.handleDaySelection = this.handleDaySelection.bind(this);
  }

  handleDaySelection(e) {
    var thisBind = this;
    e.preventDefault();
    newDay = e.target.value;
    console.log(newDay);
    if (newDay === "Empty Template") {
      thisBind.setState({
        day1Selected: "hide",
        emptyTemplateSelected: "show1",
      });
    } else if (newDay === "Austin's Day 1") {
      thisBind.setState({
        day1Selected: "show",
        emptyTemplateSelected: "hide1",
      });
    } else {
      thisBind.setState({
        day1Selected: "hide",
        emptyTemplateSelected: "hide1"
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
                <option>Austin's Day 1</option>
                <option>Empty Template</option>
              </select>
            </span>
          </p>
        </div>

        <div id={this.state.day1Selected}>
          <Day1 name={this.props.location.state.name}/>
        </div>
        <div id={this.state.emptyTemplateSelected}>
          <EmptyTemplate name={this.props.location.state.name}/>
        </div>

      </div>
    );
  }
}

export default newworkout;
