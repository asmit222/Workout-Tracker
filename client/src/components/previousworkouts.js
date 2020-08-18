import React, { Component } from "react";
import App from "../../App";

class Previousworkouts extends Component {
  render() {
    return (
      <div className="margin">
        <table className="content is-small table is-bordered">
          <thead className="dateaboveprev">8/11/2020</thead>
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
              <td>Bench Press</td>
              <td>3</td>
              <td>5</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
            <tr>
              <td>Workout 2</td>
              <td>4</td>
              <td>8</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
            <tr>
              <td>Workout 3</td>
              <td>3</td>
              <td>8-10</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
            <tr>
              <td>Workout 4</td>
              <td>3</td>
              <td>5</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
            <tr>
              <td>Workout 5</td>
              <td>3</td>
              <td>5</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
            <tr>
              <td>Workout 6</td>
              <td>3</td>
              <td>5</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
            <tr>
              <td>Workout 7</td>
              <td>3</td>
              <td>5</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
          </tbody>
        </table>

        <article className="content is-small message notes">
          <div id='notesheader' className="message-header">
            <p>Notes</p>
          </div>
          <div className="message-body">
            The notes will go here when I figure out wtf I am doing...
          </div>
        </article>

        <table className="content is-small table is-bordered">
          <thead className="dateaboveprev">8/8/2020</thead>
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
              <td>Bench Press</td>
              <td>3</td>
              <td>5</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
            <tr>
              <td>Workout 2</td>
              <td>4</td>
              <td>8</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
            <tr>
              <td>Workout 3</td>
              <td>3</td>
              <td>8-10</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
            <tr>
              <td>Workout 4</td>
              <td>3</td>
              <td>5</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
            <tr>
              <td>Workout 5</td>
              <td>3</td>
              <td>5</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
            <tr>
              <td>Workout 6</td>
              <td>3</td>
              <td>5</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
            <tr>
              <td>Workout 7</td>
              <td>3</td>
              <td>5</td>
              <td>135/5</td>
              <td>135/6</td>
              <td>185/5</td>
              <td>185/4</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Previousworkouts;
