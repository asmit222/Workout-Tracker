import React, { Component } from "react";
import Previousworkouts from "./previousworkouts";
import EmptyTemplate from "./emptyTemplate";
import axios from 'axios';
import Template from './template'


var newDay;

class newworkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pookClassName: 'pook',
      quickStartSelected: '',
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
      templates: [{'templateName': 'nonamelikethis'}, {'templateName': ''}],
      dropDown: '',
      day1Selected: "hide",
      emptyTemplateSelected: "hide1",
      templateSelected: "hide",
      day: '',
    };
    this.handleDaySelection = this.handleDaySelection.bind(this);
    this.hideDropDown = this.hideDropDown.bind(this);

    this.handleQuickStart = this.handleQuickStart.bind(this);
  }

  handleQuickStart (e) {
    e.preventDefault();

    this.setState({
      day1Selected: "hide",
      emptyTemplateSelected: "show1",
      templateSelected: 'hide',
      day: 'Custom Workout',
      quickStartSelected: 'hide',
      pook: 'hide'
    });

  }

componentDidMount() {

var thisBind = this;

if (this.props.location.state !== undefined){
  axios.post('/getTemplates',
      `${[thisBind.props.location.state.name]}`
    )
    .then((response) => {
      if(response.data.length > 0) {
        response.data.reverse();
        thisBind.setState({
               templates: response.data,
              })
      }
      // console.log('look here: ', response.data.length > 0)
    }, (error) => {
      alert(error);
    });
  } else {
    console.log('testing');
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
        day: 'Custom Workout',
        quickStartSelected: 'hide',
        pookClassName: 'hide'
      });
    } else if (newDay === "Austin's Day 1") {
      thisBind.setState({
        day: 'Austins Day 1',
        day1Selected: "show",
        templateSelected: 'hide',
        emptyTemplateSelected: "hide1",
        quickStartSelected: 'hide',
        pookClassName: 'hide'
      });
    } else if (newDay === "Select a workout") {
      thisBind.setState({
        day: '',
        day1Selected: "hide",
        templateSelected: 'hide',
        emptyTemplateSelected: "hide1",
        quickStartSelected: '',
        pookClassName: 'pook'
      });
    } else {
      thisBind.setState({
        workoutName: e.target.value,
        day1Selected: "hide",
        emptyTemplateSelected: "hide1",
        templateSelected: 'show',
        quickStartSelected: 'hide',
        pookClassName: 'hide'
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
    if(this.state.templates[0]['templateName'] !== 'nonamelikethis') {
      var templates = this.state.templates.map((template) => {
      return <option>{template.templateName.slice(1, template.templateName.length - 1)}</option>
      })
    } else {
      var templates = <div id='hide'></div>
    }
    return (
      <React.Fragment>
      <div className="block selectWorkoutAnimation">
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
          <Template currentTemplate={this.state.currentTemplate} templates={this.state.templates} workoutName={this.state.workoutName} name={this.props.location.state !== undefined ? this.props.location.state.name : null} quickStartSelected={this.state.quickStartSelected} day={this.state.day} hideDropDown={this.hideDropDown} hideNav={this.props.location.state !== undefined ? this.props.location.state.hideNav : null}/>
        </div>

        <div id={this.state.emptyTemplateSelected}>
          <EmptyTemplate name={this.props.location.state !== undefined ? this.props.location.state.name : null} quickStartSelected={this.state.quickStartSelected} day={this.state.day} hideDropDown={this.hideDropDown} hideNav={this.props.location.state !== undefined ? this.props.location.state.hideNav : null}/>
        </div>

<div id={this.state.pookClassName}>
{this.state.templates[0].name === 'NATALIE' ? <div><div> {"have a good workout my pook! "}<i className='fa fa-heart'></i> </div>
<div className='underHaveAGoodWorkout'></div>
<div className='underHaveAGoodWorkout2'></div></div>
: <div id='hide'></div>}
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
