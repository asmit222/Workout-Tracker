import React, { Component } from "react";
import App from "../../App";
import axios from 'axios';


class Previousworkouts extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
     data: [],
    };

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
            })
    }, (error) => {
      alert(error);
    });
  } else {
this.props.history.push('/Home')
  }
    setTimeout(() => console.log(this.state.data), 1000);

  }


  render() {
    return (
 <div>
    {/* <div id={'workoutHistoryText'}>
          </div> */}
{this.state.data.map((workout) =>(
      <div  id={workout.color} className="margin historyBackground">

        <div  className='workoutName is-info'>{workout.workoutPlan.slice(1, workout.workoutPlan.length - 1)}</div>

        {/* <div className='colorSpan' id={workout.color}></div> */}

        <table className="content is-small table is-bordered">
<thead className="dateaboveprev">{`${workout.workoutDate.split(' ').slice(1, 4).join(' ')}`}</thead>
          <thead id="workoutheader">
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
          <tbody>
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
            <tr>
            <td>{workout.workout3.split(',')[0]}</td>
              <td>{workout.workout3.split(',')[1]}</td>
              <td>{workout.workout3.split(',')[2]}</td>
              <td>{workout.workout3.split(',')[3]}</td>
              <td>{workout.workout3.split(',')[4]}</td>
              <td>{workout.workout3.split(',')[5]}</td>
              <td>{workout.workout3.split(',')[6]}</td>
            </tr>
            <tr>
            <td>{workout.workout4.split(',')[0]}</td>
              <td>{workout.workout4.split(',')[1]}</td>
              <td>{workout.workout4.split(',')[2]}</td>
              <td>{workout.workout4.split(',')[3]}</td>
              <td>{workout.workout4.split(',')[4]}</td>
              <td>{workout.workout4.split(',')[5]}</td>
              <td>{workout.workout4.split(',')[6]}</td>
            </tr>
            <tr>
            <td>{workout.workout5.split(',')[0]}</td>
              <td>{workout.workout5.split(',')[1]}</td>
              <td>{workout.workout5.split(',')[2]}</td>
              <td>{workout.workout5.split(',')[3]}</td>
              <td>{workout.workout5.split(',')[4]}</td>
              <td>{workout.workout5.split(',')[5]}</td>
              <td>{workout.workout5.split(',')[6]}</td>
            </tr>
            <tr>
            <td>{workout.workout6.split(',')[0]}</td>
              <td>{workout.workout6.split(',')[1]}</td>
              <td>{workout.workout6.split(',')[2]}</td>
              <td>{workout.workout6.split(',')[3]}</td>
              <td>{workout.workout6.split(',')[4]}</td>
              <td>{workout.workout6.split(',')[5]}</td>
              <td>{workout.workout6.split(',')[6]}</td>
            </tr>
            <tr>
            <td>{workout.workout7.split(',')[0]}</td>
              <td>{workout.workout7.split(',')[1]}</td>
              <td>{workout.workout7.split(',')[2]}</td>
              <td>{workout.workout7.split(',')[3]}</td>
              <td>{workout.workout7.split(',')[4]}</td>
              <td>{workout.workout7.split(',')[5]}</td>
              <td>{workout.workout7.split(',')[6]}</td>
            </tr>
          </tbody>
        </table>

        {workout.notes.length > 0 ? <article className="content is-small message notes">
          <div id='notesheader' className="message-header">
            <p>Notes</p>
          </div>
          <div className="message-body notesBody">
{workout.notes}
          </div>
        </article> : <div id='hide'> </div>}
      </div>
))}
      </div>
    );
  }
}

export default Previousworkouts;
