import React, { Component } from "react";
import App from "../../App";
import $ from 'jquery';

class Previousworkouts extends Component {


  constructor(props) {
    super(props);
    this.state = {
     data: [],
    };

  }

  componentDidMount() {
    // console.log(this.props.location.state.name);
    // console.log('test')
    var thisBind = this;
    $.ajax({
      type: "POST",
      url: 'http://localhost:2020/getWorkouts',
      data: `${[thisBind.props.location.state.name]}`,
      success: function (data) {
        data.reverse();
        thisBind.setState({
          data: data,
        })
      },
      dataType: 'json'
    });

    setTimeout(() =>console.log(this.state.data), 3000);
  }


  render() {
    return (
 <div>
{this.state.data.map((workout) => (
      <div className="margin">
        <table className="content is-small table is-bordered">
<thead className="dateaboveprev">{workout.workoutDate}</thead>
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

        <article className="content is-small message notes">
          <div id='notesheader' className="message-header">
            <p>Notes</p>
          </div>
          <div className="message-body">
{workout.notes}
          </div>
        </article>

      </div>
))}
      </div>
    );
  }
}

export default Previousworkouts;
