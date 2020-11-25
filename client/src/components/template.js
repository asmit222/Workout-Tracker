import React, { Component } from "react";
import Previousworkouts from "./previousworkouts";
import { Prompt } from "react-router";
import axios from 'axios';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

import { Route , withRouter} from 'react-router-dom';
import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Switch,
} from "react-router-dom";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show45: "",
      show35: "",
      show25: "",
      show10: "",
      show5: "",
      show2point5: "",
      showTextAnswer: "hide",
      weightsCount: {"45": 0, "35": 0, "25": 0, "10": 0, "5": 0, "2.5": 0},
      showWeightsContainer: "hide",
      plateAnswerClassName: "noWeight",
      plateCalc: "",
      allowedCharacters: 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ-@#$/%.+()*^!= ',
      animationname: '',
      historyBox: 'closed',
      historyPeek: 'hide',
      data: [],
      workoutName: 'Custom',
      hideButtons: '',
      username: ' ',
      workout1: ["", "", "", "", "", "", ""],
      workout2: ["", "", "", "", "", "", ""],
      workout3: ["", "", "", "", "", "", ""],
      workout4: ["", "", "", "", "", "", ""],
      workout5: ["", "", "", "", "", "", ""],
      workout6: ["", "", "", "", "", "", ""],
      workout7: ["", "", "", "", "", "", ""],
      notes: "",
      workoutDate: new Date(),
      submitted: false,
    };
    this.handleChangePlateCalc = this.handleChangePlateCalc.bind(this);

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

    this.sendWorkout = this.sendWorkout.bind(this);

    this.handleSmallButtonClick = this.handleSmallButtonClick.bind(this);
  }

   handleChangePlateCalc(e) {
     var plateAnswerClassName2 = 'noWeight';
     var result;
   if(e.target.value === "") {
     result = ''

     this.setState({
      showWeightsContainer: "hide",
      showTextAnswer: "hide",
    })
   } else if (Number(e.target.value) === 45) {
    result = 'the bar';
    this.setState({
      showTextAnswer: "",
    })
   } else if ( (Number(e.target.value) % 5 !== 0 || Number(e.target.value) - 45 < 5) && e.target.value !== "" ) {
    result = 'invalid weight'
    this.setState({
      showWeightsContainer: 'hide',
      showTextAnswer: "",
    })
   } else {
this.setState({
  showWeightsContainer: "",
  showTextAnswer: "hide",
})

var numberOf45s = 0;
var numberOf35s = 0;
var numberOf25s = 0;
var numberOf10s = 0;
var numberOf5s = 0;
var numberOf2AndAHalfs = 0;

var totalWeight = Number(e.target.value) - 45;


while (totalWeight - 90 >= 0) {
  numberOf45s++;
  totalWeight = totalWeight - 90;
}
while (totalWeight - 70 >= 0) {
  numberOf35s++;
  totalWeight = totalWeight - 70;
}
while (totalWeight - 50 >= 0) {
  numberOf25s++;
  totalWeight = totalWeight - 50;
}
while (totalWeight - 20 >= 0) {
  numberOf10s++;
  totalWeight = totalWeight - 20;
}
while (totalWeight - 10 >= 0) {
  numberOf5s++;
  totalWeight = totalWeight - 10;
}
while (totalWeight - 5 >= 0) {
  numberOf2AndAHalfs++;
  totalWeight = totalWeight - 5;
}

numberOf45s === 0 ? this.setState({show45: "hide"}) : this.setState({show45: ""});
numberOf35s === 0 ? this.setState({show35: "hide"}) : this.setState({show35: ""});
numberOf25s === 0 ? this.setState({show25: "hide"}) : this.setState({show25: ""});
numberOf10s === 0 ? this.setState({show10: "hide"}) : this.setState({show10: ""});
numberOf5s === 0 ? this.setState({show5: "hide"}) : this.setState({show5: ""});
numberOf2AndAHalfs === 0 ? this.setState({show2point5: "hide"}) : this.setState({show2point5: ""});


var oldWeightsCount = this.state.weightsCount;
oldWeightsCount["45"] = numberOf45s;
oldWeightsCount["35"] = numberOf35s;
oldWeightsCount["25"] = numberOf25s;
oldWeightsCount["10"] = numberOf10s;
oldWeightsCount["5"] = numberOf5s;
oldWeightsCount["2.5"] = numberOf2AndAHalfs;


this.setState({
  weightsCount: oldWeightsCount,
})

   }
    this.setState({
      plateAnswerClassName: plateAnswerClassName2,
      plateCalc: result,
    })
  }

  componentDidMount() {
var thisBind = this;

    axios.post('/getWorkouts',
    `${[thisBind.props.name]}`
  )
  .then((response) => {
    response.data.reverse();
      thisBind.setState({
             data: response.data,
            })
  }, (error) => {
    alert(error);
  });
  }

  handleSmallButtonClick(e) {
    console.log('quickstart: ', this.props.quickStartSelected)
    e.preventDefault();
    var thisBind = this;

    if(this.state.historyPeek === 'hide') {
      this.setState({
        historyPeek: '',
        historyBox: 'open'
      })
    } else {
      this.setState({
        historyPeek: 'hide',
        historyBox: 'closed'
      })
    }

  }

  sendWorkout () {
    var thisBind = this;
      var arr = [
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
        this.props.day,
        this.props.workoutName,
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

    // setTimeout(() => {

      axios.post('/test',
      `${arr}`
    )
    .then((response) => {
      console.log('workout sent for Template!')
    }, (error) => {
      alert(error);
    });

    // }, 3000)

  }

  handleChangeWorkoutName(e) {
    e.preventDefault();
    this.setState({
      workoutName: e.target.value,
    })
    // this.sendWorkout();
  }

  handleHomeClick () {

    this.props.hideDropDown();
    this.props.hideNav();
    this.setState({
      hideButtons: 'hide',
    })
  }

  handlePreviousClick () {

    this.props.hideDropDown();
    this.props.hideNav();
    this.setState({
      hideButtons: 'hide',
    })
  }

  handleNotes(e) {
    e.preventDefault();
    var thisBind = this;
var allowedCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ-@#$/%.+()*^!= ';

    if(allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {

      this.setState({
        notes: e.target.value,
      });
      // this.sendWorkout();
    }

  }

  handleDateChange(e) {
    var thisBind = this;
    e.preventDefault();
    var workoutDate = e.target.value;
    thisBind.setState({
      workoutDate: workoutDate,
    });
    // this.sendWorkout();
  }

  handleChangeSquat0(e) {

    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {

    e.preventDefault();
    this.state.workout1[0] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeSquat1(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout1[1] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeSquat2(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout1[2] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeSquat3(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout1[3] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeSquat4(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout1[4] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeSquat5(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout1[5] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeSquat6(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout1[6] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeHipThrust0(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout2[0] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeHipThrust1(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout2[1] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeHipThrust2(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout2[2] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeHipThrust3(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout2[3] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeHipThrust4(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout2[4] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeHipThrust5(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout2[5] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeHipThrust6(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout2[6] = e.target.value;
    // this.sendWorkout();
    }
  }


  handleChangeBenchPress0(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout3[0] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeBenchPress1(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout3[1] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeBenchPress2(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout3[2] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeBenchPress3(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout3[3] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeBenchPress4(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout3[4] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeBenchPress5(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout3[5] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeBenchPress6(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout3[6] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeChinUps0(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout4[0] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeChinUps1(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout4[1] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeChinUps2(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout4[2] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeChinUps3(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout4[3] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeChinUps4(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout4[4] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeChinUps5(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout4[5] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeChinUps6(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout4[6] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeDBFarmerCarry0(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout5[0] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeDBFarmerCarry1(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout5[1] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeDBFarmerCarry2(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout5[2] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeDBFarmerCarry3(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout5[3] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeDBFarmerCarry4(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout5[4] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeDBFarmerCarry5(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout5[5] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeDBFarmerCarry6(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout5[6] = e.target.value;
    // this.sendWorkout();
    }
  }


  handleChangeFacePulls0(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout6[0] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeFacePulls1(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout6[1] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeFacePulls2(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout6[2] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeFacePulls3(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout6[3] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeFacePulls4(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout6[4] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeFacePulls5(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout6[5] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeFacePulls6(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout6[6] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeExtraWorkout3(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout7[3] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeExtraWorkout4(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout7[4] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeExtraWorkout5(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout7[5] = e.target.value;
    // this.sendWorkout();
    }
  }
  handleChangeExtraWorkout6(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout7[6] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeExtraWorkout0(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout7[0] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeExtraWorkout1(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout7[1] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeExtraWorkout2(e) {
    if(this.state.allowedCharacters.split('').indexOf(e.target.value[e.target.value.length - 1]) === -1) {
      // alert('that character is not allowed at this time :(');
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    } else {
    e.preventDefault();
    this.state.workout7[2] = e.target.value;
    // this.sendWorkout();
    }
  }

  handleChangeDatePicker = date => {
    this.setState({
      workoutDate: date
    });
    // this.sendWorkout();
  };

  handleSubmitWorkout(e) {
    console.log(this.props.currentTemplate);
    var thisBind = this;
    e.preventDefault();

    confirmAlert({
      title: 'Submit workout?',
      buttons: [
        {
          label: 'Submit',
          onClick: () => {

            this.props.hideDropDown();

            this.setState({
              submitted: 'inProgress',
            })

            setTimeout(() => {
              this.setState({
                animationName: 'forwardInAnimation',
                submitted: true,
              }, () => {thisBind.props.history.push('/previousWorkouts')})
            }, 2000)

           var arr = [
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
              this.props.day,
              this.props.workoutName,
            ];


            console.log('notes: ', arr[2]);

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

for (var j = 0; j < arr[1][0].length; j++) {
  if(arr[1][0][j] === "") {
    arr[1][0][j] = thisBind.props.currentTemplate.workout1.split(',')[j];
  }
}

for (var j = 0; j < arr[1][1].length; j++) {
  if(arr[1][1][j] === "") {
    arr[1][1][j] = thisBind.props.currentTemplate.workout2.split(',')[j];
  }
}

for (var j = 0; j < arr[1][2].length; j++) {
  if(arr[1][2][j] === "") {
    arr[1][2][j] = thisBind.props.currentTemplate.workout3.split(',')[j];
  }
}

for (var j = 0; j < arr[1][3].length; j++) {
  if(arr[1][3][j] === "") {
    arr[1][3][j] = thisBind.props.currentTemplate.workout4.split(',')[j];
  }
}

for (var j = 0; j < arr[1][4].length; j++) {
  if(arr[1][4][j] === "") {
    arr[1][4][j] = thisBind.props.currentTemplate.workout5.split(',')[j];
  }
}

for (var j = 0; j < arr[1][5].length; j++) {
  if(arr[1][5][j] === "") {
    arr[1][5][j] = thisBind.props.currentTemplate.workout6.split(',')[j];
  }
}

for (var j = 0; j < arr[1][6].length; j++) {
  if(arr[1][6][j] === "") {
    arr[1][6][j] = thisBind.props.currentTemplate.workout7.split(',')[j];
  }
}



            axios.post('/test',
            `${arr}`
          )
          .then((response) => {
            console.log('workout sent for workout!')
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
    if (this.state.submitted !== 'inProgress' && this.state.submitted !== true) {
    return (
      <React.Fragment>
        <div className='forwardInAnimation'>
              {this.state.historyBox === 'closed' ? <button onClick={this.handleSmallButtonClick} className="button is-small is-success smallHistoryButton"><span>History box</span> <i className="fa fa-angle-up downArrow" aria-hidden="true"></i></button> :    <button onClick={this.handleSmallButtonClick} className="button is-small is-warning smallHistoryButton"><span>History box</span> <i className="fa fa-angle-down downArrow" aria-hidden="true"></i></button>}

              <span>
              <input onChange={this.handleChangePlateCalc} autocomplete="off" className="input is-info is-small weightCalcInput" type="text" placeholder="Plate Calculator"></input>
                </span>
                <div id={this.state.showWeightsContainer} className='weightsContainer forwardInAnimation'>

                <span id={this.state.show45} className='textAndWeight45'>
    <span className='textForWeights'>{this.state.weightsCount["45"]}</span>
                <span className='weight45'></span>
                  </span>

                  <span  id={this.state.show35} className='textAndWeight35'>
    <span className='textForWeights'>{this.state.weightsCount["35"]}</span>
                <span className='weight35'></span>
                  </span>

                  <span  id={this.state.show25}  className='textAndWeight25'>
    <span className='textForWeights'>{this.state.weightsCount["25"]}</span>
                <span className='weight25'></span>
                  </span>

                  <span id={this.state.show10}  className='textAndWeight10'>
    <span className='textForWeights'>{this.state.weightsCount["10"]}</span>
                <span className='weight10'></span>
                  </span>

                  <span id={this.state.show5}  className='textAndWeight5'>
    <span className='textForWeights'>{this.state.weightsCount["5"]}</span>
                <span className='weight5'></span>
                  </span>

                  <span id={this.state.show2point5}  className='textAndWeight2point5'>
    <span className='textForWeights'>{this.state.weightsCount["2.5"]}</span>
                <span className='weight2point5'></span>
                  </span>

                  <span className='eachSide'>each side</span>


                  </div>

    <span id={this.state.showTextAnswer} className={`${this.state.plateAnswerClassName} forwardInAnimation`}>{this.state.plateCalc}</span>

              {(this.props.quickStartSelected !== '' && !this.state.submitted) ? <Prompt message="Discard workout?" /> : <div id='hide'> </div>}

        <div id={this.state.historyPeek} className='block historyModalContainer'>
{/*========================================================================================= */}

<div className='insideContainer'>
<div className='workoutHistoryTitle'>Workout History</div>

{this.state.data.map((workout) =>(
      <div  className="margin historyBackground previousWorkout">

        <div className='workoutName is-info'>{workout.workoutPlan.slice(1, workout.workoutPlan.length - 1)}</div>
<div className='scrollContainer2'>
        <table className="content is-small table is-bordered">
<thead className="dateaboveprev">{workout.workoutDate}</thead>
          <thead id='workoutheader' className={workout.color}>
            <tr>
              <th>Workout</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody className={workout.color}>
            <tr>
              <td>{workout.workout1.split(',')[0]}</td>
              <td>{workout.workout1.split(',')[1]}</td>
              <td>{workout.workout1.split(',')[2]}</td>
              <td>{workout.workout1.split(',')[3]}</td>
              <td>{workout.workout1.split(',')[4]}</td>
              <td>{workout.workout1.split(',')[5]}</td>
              <td>{workout.workout1.split(',')[6]}</td>
            </tr>
            <tr>
            <td>{workout.workout2.split(',')[0]}</td>
              <td>{workout.workout2.split(',')[1]}</td>
              <td>{workout.workout2.split(',')[2]}</td>
              <td>{workout.workout2.split(',')[3]}</td>
              <td>{workout.workout2.split(',')[4]}</td>
              <td>{workout.workout2.split(',')[5]}</td>
              <td>{workout.workout2.split(',')[6]}</td>
            </tr>
            {workout.workout3.split(',')[0] !== ' ' && workout.workout3.split(',')[0] !== '' ? <tr>
            <td>{workout.workout3.split(',')[0]}</td>
              <td>{workout.workout3.split(',')[1]}</td>
              <td>{workout.workout3.split(',')[2]}</td>
              <td>{workout.workout3.split(',')[3]}</td>
              <td>{workout.workout3.split(',')[4]}</td>
              <td>{workout.workout3.split(',')[5]}</td>
              <td>{workout.workout3.split(',')[6]}</td>
              </tr> : <tr id='hide'></tr>}
            {workout.workout4.split(',')[0] !== ' ' && workout.workout3.split(',')[0] !== '' ? <tr>
            <td>{workout.workout4.split(',')[0]}</td>
              <td>{workout.workout4.split(',')[1]}</td>
              <td>{workout.workout4.split(',')[2]}</td>
              <td>{workout.workout4.split(',')[3]}</td>
              <td>{workout.workout4.split(',')[4]}</td>
              <td>{workout.workout4.split(',')[5]}</td>
              <td>{workout.workout4.split(',')[6]}</td>
              </tr> : <tr id='hide'></tr>}
            {workout.workout5.split(',')[0] !== ' ' && workout.workout3.split(',')[0] !== '' ? <tr>
            <td>{workout.workout5.split(',')[0]}</td>
              <td>{workout.workout5.split(',')[1]}</td>
              <td>{workout.workout5.split(',')[2]}</td>
              <td>{workout.workout5.split(',')[3]}</td>
              <td>{workout.workout5.split(',')[4]}</td>
              <td>{workout.workout5.split(',')[5]}</td>
              <td>{workout.workout5.split(',')[6]}</td>
              </tr> : <tr id='hide'></tr>}
            {workout.workout6.split(',')[0] !== ' ' && workout.workout3.split(',')[0] !== '' ? <tr>
            <td>{workout.workout6.split(',')[0]}</td>
              <td>{workout.workout6.split(',')[1]}</td>
              <td>{workout.workout6.split(',')[2]}</td>
              <td>{workout.workout6.split(',')[3]}</td>
              <td>{workout.workout6.split(',')[4]}</td>
              <td>{workout.workout6.split(',')[5]}</td>
              <td>{workout.workout6.split(',')[6]}</td>
              </tr> : <tr id='hide'></tr>}
            {workout.workout7.split(',')[0] !== ' ' && workout.workout3.split(',')[0] !== '' ? <tr>
            <td>{workout.workout7.split(',')[0]}</td>
              <td>{workout.workout7.split(',')[1]}</td>
              <td>{workout.workout7.split(',')[2]}</td>
              <td>{workout.workout7.split(',')[3]}</td>
              <td>{workout.workout7.split(',')[4]}</td>
              <td>{workout.workout7.split(',')[5]}</td>
              <td>{workout.workout7.split(',')[6]}</td>
            </tr> : <tr id='hide'></tr>}
          </tbody>
        </table>
        </div>

        {workout.notes.length > 0 ? <article className="content is-small message notes">
          <div id='notesheader2' className="message-header">
            <p>Notes</p>
          </div>
          <div className="message-body notesBody">
{workout.notes}
          </div>
        </article> : <div id='hide'> </div>}
      </div>
))}
      </div>







 {/*======================================================================================== */}
        </div>
        <div className='scrollContainer'>
        <div className="block minWidthBlock">
          <form autocomplete="off">

            <table id='customTable' className="content is-small table is-bordered">
              <thead id="workoutheader">
                <tr>
                  <th id='workoutWidth'>Workout</th>
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
                  <td> <input
                  placeholder={this.props.currentTemplate.workout1.split(',')[0]}
                      id="tdinput"
                      onChange={this.handleChangeSquat0}
                      type="text"
                      className="input"
    ></input></td>
                  <td>  <input
                  placeholder={this.props.currentTemplate.workout1.split(',')[1]}
                      id="tdinput"
                      onChange={this.handleChangeSquat1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td>  <input
                  placeholder={this.props.currentTemplate.workout1.split(',')[2]}
                      id="tdinput"
                      onChange={this.handleChangeSquat2}
                      type="text"
                      className="input"
                    ></input></td>
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
                  <td> <input
                  placeholder={this.props.currentTemplate.workout2.split(',')[0]}
                      id="tdinput"
                      onChange={this.handleChangeHipThrust0}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                  placeholder={this.props.currentTemplate.workout2.split(',')[1]}
                      id="tdinput"
                      onChange={this.handleChangeHipThrust1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                  placeholder={this.props.currentTemplate.workout2.split(',')[2]}
                      id="tdinput"
                      onChange={this.handleChangeHipThrust2}
                      type="text"
                      className="input"
                    ></input></td>
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
                  <td><input
                  placeholder={this.props.currentTemplate.workout3.split(',')[0]}
                      id="tdinput"
                      onChange={this.handleChangeBenchPress0}
                      type="text"
                      className="input"
                    ></input></td>
                  <td><input
                  placeholder={this.props.currentTemplate.workout3.split(',')[1]}
                      id="tdinput"
                      onChange={this.handleChangeBenchPress1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td><input
                  placeholder={this.props.currentTemplate.workout3.split(',')[2]}
                      id="tdinput"
                      onChange={this.handleChangeBenchPress2}
                      type="text"
                      className="input"
                    ></input></td>
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
                  <td> <input
                  placeholder={this.props.currentTemplate.workout4.split(',')[0]}
                      id="tdinput"
                      onChange={this.handleChangeChinUps0}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                  placeholder={this.props.currentTemplate.workout4.split(',')[1]}
                      id="tdinput"
                      onChange={this.handleChangeChinUps1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                  placeholder={this.props.currentTemplate.workout4.split(',')[2]}
                      id="tdinput"
                      onChange={this.handleChangeChinUps2}
                      type="text"
                      className="input"
                    ></input></td>
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
                  <td> <input
                  placeholder={this.props.currentTemplate.workout5.split(',')[0]}
                      id="tdinput"
                      onChange={this.handleChangeDBFarmerCarry0}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                  placeholder={this.props.currentTemplate.workout5.split(',')[1]}
                      id="tdinput"
                      onChange={this.handleChangeDBFarmerCarry1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                  placeholder={this.props.currentTemplate.workout5.split(',')[2]}
                      id="tdinput"
                      onChange={this.handleChangeDBFarmerCarry2}
                      type="text"
                      className="input"
                    ></input></td>
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
                  <td> <input
                  placeholder={this.props.currentTemplate.workout6.split(',')[0]}
                      id="tdinput"
                      onChange={this.handleChangeFacePulls0}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                  placeholder={this.props.currentTemplate.workout6.split(',')[1]}
                      id="tdinput"
                      onChange={this.handleChangeFacePulls1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td> <input
                  placeholder={this.props.currentTemplate.workout6.split(',')[2]}
                      id="tdinput"
                      onChange={this.handleChangeFacePulls2}
                      type="text"
                      className="input"
                    ></input></td>
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
                    placeholder={this.props.currentTemplate.workout7.split(',')[0]}
                      id="tdinput"
                      onChange={this.handleChangeExtraWorkout0}
                      type="text"
                      className="input"
                    ></input>
                  </td>
                  <td><input
                  placeholder={this.props.currentTemplate.workout7.split(',')[1]}
                      id="tdinput"
                      onChange={this.handleChangeExtraWorkout1}
                      type="text"
                      className="input"
                    ></input></td>
                  <td>
                    <input
                    placeholder={this.props.currentTemplate.workout7.split(',')[2]}
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
            </form>
    </div>
    </div>
            <DatePicker id='datePickerRectangle'
        selected={this.state.workoutDate}
        onChange={this.handleChangeDatePicker}
        />

            <form id='notesForm'>
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
              className="submitWorkoutButton button is-danger"
            >
               <span className="icon is-small">
      <i className="fa fa-check"></i>
    </span>
    <span>Submit workout</span>

            </button>
            </div>
      </React.Fragment>
    );

//   } else {
//     return (
//       <React.Fragment>
//         <div>

// <section id={this.state.hideButtons} className="hero whiteBorder2 is-dark">
//  <div className="hero-body">
//    <div className="container">
//      <h1 className="title forwardInAnimation">
//       Your workout has been submitted!
//      </h1>
//      <h2 className="subtitle">
//      </h2>
//    </div>
//  </div>
// </section>

//  <Link to={{
//   pathname: '/Home',
//   state: {
//     name: this.props.name,
//   }
// }}>
//                     <a id={this.state.hideButtons} onClick={this.handleHomeClick} className="forwardInAnimation homeButton afterSubmitButtons button marginbottom buttonBackground">
//                       <span></span>
//                     </a>
//                   </Link>
//                   <Link to={{
//   pathname: '/newworkout',
//   state: {
//     name: this.props.name,
//   }
// }}>
//                     <a  id={this.state.hideButtons} onClick={this.handleHomeClick} className="forwardInAnimation button afterSubmitButtons marginbottom newWorkoutButton">
//                       <span ></span>
//                     </a>
//                   </Link>
//                   <Link to={{
//   pathname: '/workoutTemplates',
//   state: {
//     name: this.props.name,
//   }
// }}>
//                     <a id={this.state.hideButtons} onClick={this.handleHomeClick} className="forwardInAnimation button afterSubmitButtons marginbottom workoutTemplatesButton ">
//                       <span ></span>
//                     </a>
//                   </Link>
//                   <Link to={{
//   pathname: '/previousworkouts',
//   state: {
//     name: this.props.name,
//   }
// }}>
//                     <a id={this.state.hideButtons} onClick={this.handlePreviousClick} className="forwardInAnimation historyButton afterSubmitButtons button marginbottom ">
//                       <span ></span>
//                     </a>
//                   </Link>

//                   <section id={this.state.hideButtons} className="hero whiteBorder3 is-dark">
//  <div className="hero-body">
//    <div className="container">
//      <h1 className="title forwardInAnimation">

//      </h1>
//      <h2 className="subtitle">
//      </h2>
//    </div>
//  </div>
// </section>

//                   </div>
//       </React.Fragment>
//     )
//    }
  } else {

    return (
      <React.Fragment>

<section id={this.state.hideButtons} className="hero whiteBorder2 is-dark">
 <div className="hero-body">
   <div className="container">
     <h1 className="title forwardInAnimation">
      Your workout has been submitted!
     </h1>
     <h2 id='redirectingHome' className="subtitle">
       Redirecting...
     </h2>


     <div className='meterContainer2'>
    <div className="meter2">
    <span className="progress2"></span>
</div>
</div>


   </div>
 </div>
</section>

 {/* <Link to={{
  pathname: '/Home',
  state: {
    name: this.props.name,
  }
}}>
                    <a id={this.state.hideButtons} onClick={this.handleHomeClick} className="forwardInAnimation homeButton afterSubmitButtons button marginbottom buttonBackground">
                      <span></span>
                    </a>
                  </Link>
                  <Link to={{
  pathname: '/newworkout',
  state: {
    name: this.props.name,
  }
}}>
                    <a  id={this.state.hideButtons} onClick={this.handleHomeClick} className="forwardInAnimation button afterSubmitButtons marginbottom newWorkoutButton">
                      <span ></span>
                    </a>
                  </Link>
                  <Link to={{
  pathname: '/workoutTemplates',
  state: {
    name: this.props.name,
  }
}}>
                    <a id={this.state.hideButtons} onClick={this.handleHomeClick} className="forwardInAnimation button afterSubmitButtons marginbottom workoutTemplatesButton ">
                      <span ></span>
                    </a>
                  </Link>
                  <Link to={{
  pathname: '/previousworkouts',
  state: {
    name: this.props.name,
  }
}}>
                    <a id={this.state.hideButtons} onClick={this.handlePreviousClick} className="forwardInAnimation historyButton afterSubmitButtons button marginbottom ">
                      <span ></span>
                    </a>
                  </Link> */}

                  {/* <section id={this.state.hideButtons} className="hero is-dark">
 <div className="hero-body">
   <div className="container">
     <h1 className="title forwardInAnimation">

     </h1>
     <h2 className="subtitle">
     </h2>
   </div>
 </div>
</section> */}

      </React.Fragment>
    )


  }
  }
}

export default withRouter(Template);
