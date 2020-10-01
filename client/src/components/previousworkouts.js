import React, { Component } from "react";
import App from "../../App";
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';


class Previousworkouts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
     data: [],
    };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

handleDeleteClick (e) {
  e.preventDefault();
  var thisBind = this;
  var workout = e.target.value;
  console.log('workout: ', workout);

  confirmAlert({
    title: `Delete ${workout.split(',')[1]} - ${workout.split(',')[0]} from history?`,
    buttons: [
      {
        label: 'Delete',
        onClick: () => {
// alert('that doesnt work yet, sorry...')
axios.post('/deleteWorkout',
`${[workout.split(',')[1], workout.split(',')[0], thisBind.props.location.state.name]}`
)
.then((response) => {

  this._isMounted = true;
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


}, (error) => {
alert(error);
});

        }
      },
      {
        label: 'Cancel',
        onClick: () => console.log('Click No')
      }
    ]
  });

}

  componentDidMount() {
    this._isMounted = true;

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
    setTimeout(() => console.log('data:', this.state.data), 1000);

  }


  render() {
    return (
 <div>

{this.state.data.map((workout) =>(
      <div  className="previousContainer previousWorkout forwardInAnimation">

        <div className='workoutName is-info'>{workout.workoutPlan.slice(1, workout.workoutPlan.length - 1)}</div>

        <button value={[workout.workoutDate, workout.workoutPlan.slice(1, workout.workoutPlan.length - 1)]} onClick={this.handleDeleteClick} className="delete deleteButtonHistory is-small "></button>

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
    );
  }
}

export default Previousworkouts;
