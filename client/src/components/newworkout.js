import React, { Component } from "react";
import Previousworkouts from "./previousworkouts";
import Day1 from "./Day1";
import EmptyTemplate from "./emptyTemplate";
import axios from 'axios';


var newDay;

class newworkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: [{'templateName': 'one'}, {'templateName': 'two'}],
      dropDown: '',
      day1Selected: "hide",
      emptyTemplateSelected: "hide1",
      day: '',
    };
    this.handleDaySelection = this.handleDaySelection.bind(this);
    this.hideDropDown = this.hideDropDown.bind(this);
  }

componentDidMount() {
var thisBind = this;

if (this.props.location.state !== undefined){
  axios.post('/getTemplates',
      `${[thisBind.props.location.state.name]}`
    )
    .then((response) => {
      response.data.reverse();

      thisBind.setState({
             templates: response.data,
            })
    }, (error) => {
      alert(error);
    });
  } else {
    this.props.history.push('/Home')
  }
setTimeout(() => console.log(this.state.templates), 2000);

}

  hideDropDown (e) {
    if(this.state.dropDown === '') {
    this.setState({
      dropDown: 'hide',
    })
  } else {
    this.setState({
      dropDown: '',
    })
  }
  }

  handleDaySelection(e) {
    var thisBind = this;
    e.preventDefault();
    newDay = e.target.value;


    if (newDay === "Custom Workout") {
      thisBind.setState({
        day1Selected: "hide",
        emptyTemplateSelected: "show1",
        day: 'Custom Workout'
      });
    } else if (newDay === "Austin's Day 1") {
      thisBind.setState({
        day: 'Austins Day 1',
        day1Selected: "show",
        emptyTemplateSelected: "hide1",
      });
    } else {
      thisBind.setState({
        day: '',
        day1Selected: "hide",
        emptyTemplateSelected: "hide1"
      });
    }
  }

  render() {
    return (
      <div className="block">
        <div id={this.state.dropDown} className="field selector">
          <p className="control">
            <span className="select">
              <select
                onChange={this.handleDaySelection}
                value={this.state.value}
              >
                <option>Select a workout</option>
                <option>Austin's Day 1</option>
                <option>Custom Workout</option>
{/* <div>
                {this.state.templates.map((template) => (
        <option>{template.templateName}</option>
    ))}
    </div> */}

              </select>
            </span>
          </p>
        </div>

        <div id={this.state.day1Selected}>
          <Day1 name={this.props.location.state !== undefined ? this.props.location.state.name : null} day={this.state.day} hideDropDown={this.hideDropDown} hideNav={this.props.location.state !== undefined ? this.props.location.state.hideNav : null}/>
        </div>
        <div id={this.state.emptyTemplateSelected}>
          <EmptyTemplate name={this.props.location.state !== undefined ? this.props.location.state.name : null} day={this.state.day} hideDropDown={this.hideDropDown} hideNav={this.props.location.state !== undefined ? this.props.location.state.hideNav : null}/>
        </div>

      </div>
    );
  }
}

export default newworkout;
