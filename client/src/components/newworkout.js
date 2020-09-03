import React, { Component } from "react";
import Previousworkouts from "./previousworkouts";
import Day1 from "./Day1";
import EmptyTemplate from "./emptyTemplate";
import axios from 'axios';
import Template from './template'


var newDay;

class newworkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemplate: {name: "AUSTIN",
      templateName: "'template5'",
      workout1: " , , ",
      workout2: " , , ",
      workout3: " , , ",
      workout4: " , , ",
      workout5: " , , ",
      workout6: " , , ",
      workout7: " , , "},
      workoutName: '',
      templates: [{'templateName': 'one'}, {'templateName': 'two'}],
      dropDown: '',
      day1Selected: "hide",
      emptyTemplateSelected: "hide1",
      templateSelected: "hide",
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
    console.log(e.target.value);
    var thisBind = this;
    e.preventDefault();
    newDay = e.target.value;

    if (newDay === "Custom Workout") {
      thisBind.setState({
        day1Selected: "hide",
        emptyTemplateSelected: "show1",
        templateSelected: 'hide',
        day: 'Custom Workout'
      });
    } else if (newDay === "Austin's Day 1") {
      thisBind.setState({
        day: 'Austins Day 1',
        day1Selected: "show",
        templateSelected: 'hide',
        emptyTemplateSelected: "hide1",
      });
    } else if (newDay === "Select a workout") {
      thisBind.setState({
        day: '',
        day1Selected: "hide",
        templateSelected: 'hide',
        emptyTemplateSelected: "hide1",
      });
    } else {

      thisBind.setState({
        workoutName: e.target.value,
        day1Selected: "hide",
        emptyTemplateSelected: "hide1",
        templateSelected: 'show',
      },
      after
      );
    function after () {
    for (var i = 0; i < thisBind.state.templates.length; i++) {
      if (thisBind.state.templates[i].templateName.slice(1, thisBind.state.templates[i].templateName.length - 1) === thisBind.state.workoutName) {
        thisBind.setState({
          currentTemplate: thisBind.state.templates[i],
        })
      }
    }
  }

    }



  }

  render() {
    const templates = this.state.templates.map((template) => {
    return <option>{template.templateName.slice(1, template.templateName.length - 1)}</option>
    })
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
                <option>Custom Workout</option>

                {templates}
              </select>

            </span>
          </p>
        </div>

        <div id={this.state.templateSelected}>
          <Template currentTemplate={this.state.currentTemplate} templates={this.state.templates} workoutName={this.state.workoutName} name={this.props.location.state !== undefined ? this.props.location.state.name : null} day={this.state.day} hideDropDown={this.hideDropDown} hideNav={this.props.location.state !== undefined ? this.props.location.state.hideNav : null}/>
        </div>

        <div id={this.state.emptyTemplateSelected}>
          <EmptyTemplate name={this.props.location.state !== undefined ? this.props.location.state.name : null} day={this.state.day} hideDropDown={this.hideDropDown} hideNav={this.props.location.state !== undefined ? this.props.location.state.hideNav : null}/>
        </div>

      </div>
    );
  }
}

export default newworkout;
