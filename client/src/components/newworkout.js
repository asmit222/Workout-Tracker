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
      data: [],
      currentYear: new Date().getFullYear(),
      workoutsPerMonth: {"jan": 0, "feb": 0, "mar": 0, "apr": 0, "may": 0, "jun": 0, "jul": 0, "aug": 0, "sep": 0, "oct": 0, "nov": 0, "dec": 0},
      workoutsPerMonthPercentages: {"jan": '0', "feb": '0', "mar": '0', "apr": '0', "may": '0', "jun": '0', "jul": '0', "aug": '0', "sep": '0', "oct": '0', "nov": '0', "dec": '0'},
      showStats: "",
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

  setGraphData() {
    var monthArr = [];
    for (var i = 0; i < this.state.data.length; i++) {
      if(this.state.data[i].workoutDate.split(" ")[2].toString() === this.state.currentYear.toString()) {
        monthArr.push(this.state.data[i].workoutDate.split(" ")[0])
      }
    }
    monthArr.forEach((month) => {
      if(month === "Jan") {
        var old = this.state.workoutsPerMonth
        old.jan = old.jan + 1;
        this.setState({
           workoutsPerMonth: old,
        })
      }
      if(month === "Feb") {
        var old = this.state.workoutsPerMonth
        old.feb = old.feb + 1;
        this.setState({
           workoutsPerMonth: old,
        })
      }
      if(month === "Mar") {
        var old = this.state.workoutsPerMonth
        old.mar = old.mar + 1;
        this.setState({
           workoutsPerMonth: old,
        })
      }
      if(month === "Apr") {
        var old = this.state.workoutsPerMonth
        old.apr = old.apr + 1;
        this.setState({
           workoutsPerMonth: old,
        })
      }
      if(month === "May") {
        var old = this.state.workoutsPerMonth
        old.may = old.may + 1;
        this.setState({
           workoutsPerMonth: old,
        })
      }
      if(month === "Jun") {
        var old = this.state.workoutsPerMonth
        old.jun = old.jun + 1;
        this.setState({
           workoutsPerMonth: old,
        })
      }
      if(month === "Jul") {
        var old = this.state.workoutsPerMonth
        old.jul = old.jul + 1;
        this.setState({
           workoutsPerMonth: old,
        })
      }
      if(month === "Aug") {
        var old = this.state.workoutsPerMonth
        old.aug = old.aug + 1;
        this.setState({
           workoutsPerMonth: old,
        })
      }
      if(month === "Sep") {
        var old = this.state.workoutsPerMonth
        old.sep = old.sep + 1;
        this.setState({
           workoutsPerMonth: old,
        })
      }
      if(month === "Oct") {
        var old = this.state.workoutsPerMonth
        old.oct = old.oct + 1;
        this.setState({
           workoutsPerMonth: old,
        })
      }
      if(month === "Nov") {
        var old = this.state.workoutsPerMonth
        old.nov = old.nov + 1;
        this.setState({
           workoutsPerMonth: old,
        })
      }
      if(month === "Dec") {
        var old = this.state.workoutsPerMonth
        old.dec = old.dec + 1;
        this.setState({
           workoutsPerMonth: old,
        })
      }
    })

var maxWorkoutsInAMonth = 0;
for (var key in this.state.workoutsPerMonth) {
  if (this.state.workoutsPerMonth[key] > maxWorkoutsInAMonth) {
    maxWorkoutsInAMonth = this.state.workoutsPerMonth[key]
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
})

}


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

  axios.post('/getWorkouts',
  `${[thisBind.props.location.state.name]}`
  )
  .then((response) => {
  response.data.reverse();
    thisBind.setState({
           data: response.data,
          }, this.setGraphData)
          console.log(response.data)
  }, (error) => {
  alert(error);
  });

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

    this.setState({
      showStats: "hide",
    })

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
        pookClassName: 'pook',
        showStats: "",
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


        <div id={this.state.showStats} className='forwardInAnimation barcontainer'>
  <div className='barcontainerheader'>
    {`Workouts ${this.state.currentYear}`}
  </div>

  <div className='bar' style={{height: `${this.state.workoutsPerMonthPercentages.jan}%`}}>
    {this.state.workoutsPerMonth.jan}
    <div className='barlabel'>
      Jan
    </div>
  </div>

  <div className='bar' style={{height: `${this.state.workoutsPerMonthPercentages.feb}%`}}>
  {this.state.workoutsPerMonth.feb}
    <div className='barlabel'>
      Feb
    </div>
  </div>
  <div className='bar' style={{height: `${this.state.workoutsPerMonthPercentages.mar}%`}}>
  {this.state.workoutsPerMonth.mar}
    <div className='barlabel'>
      Mar
    </div>
  </div>
  <div className='bar' style={{height: `${this.state.workoutsPerMonthPercentages.apr}%`}}>
  {this.state.workoutsPerMonth.apr}
    <div className='barlabel'>
      Apr </div>
  </div>
  <div className='bar' style={{height: `${this.state.workoutsPerMonthPercentages.may}%`}}>
  {this.state.workoutsPerMonth.may}
    <div className='barlabel'>
      May
    </div>
  </div>
  <div className='bar' style={{height: `${this.state.workoutsPerMonthPercentages.jun}%`}}>
  {this.state.workoutsPerMonth.jun}
    <div className='barlabel'>
      Jun
    </div>
  </div>
  <div className='bar' style={{height: `${this.state.workoutsPerMonthPercentages.jul}%`}}>
  {this.state.workoutsPerMonth.jul}
    <div className='barlabel'>
      Jul
    </div>
  </div>
  <div className='bar' style={{height: `${this.state.workoutsPerMonthPercentages.aug}%`}}>
  {this.state.workoutsPerMonth.aug}
    <div className='barlabel'>
      Aug
    </div>
  </div>
  <div className='bar' style={{height: `${this.state.workoutsPerMonthPercentages.sep}%`}}>
  {this.state.workoutsPerMonth.sep}
    <div className='barlabel'>
      Sep
    </div>
  </div>
  <div className='bar' style={{height: `${this.state.workoutsPerMonthPercentages.oct}%`}}>
  {this.state.workoutsPerMonth.oct}
    <div className='barlabel'>
      Oct </div>
  </div>
  <div className='bar' style={{height: `${this.state.workoutsPerMonthPercentages.nov}%`}}>
  {this.state.workoutsPerMonth.nov}
    <div className='barlabel'>
      Nov
    </div>
  </div>
  <div className='bar' style={{height: `${this.state.workoutsPerMonthPercentages.dec}%`}}>
  {this.state.workoutsPerMonth.dec}
    <div className='barlabel'>
      Dec
    </div>
  </div>
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
