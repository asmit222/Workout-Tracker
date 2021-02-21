import React, { Component } from "react";

import LogoutButton from "./logoutButton.js";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!this.props.location.state) {
      this.props.history.push("/Home");
    }
  }

  render() {
    if (this.props.location.state) {
      return (
        <div className="settingsContainer">
          <div className="picWrapper">
            <img
              className="profilePic"
              src={this.props.location.state.getPicture()}
              alt={this.props.location.state.getName()}
            />
            <div id="hide"> </div>
          </div>
          <div className="settingsEmail">
            {this.props.location.state.getEmail()}
          </div>

          <div className="logOutButtonAppWrapper">
            <LogoutButton />
          </div>
        </div>
      );
    } else {
      return <div id="hide"></div>;
    }
  }
}

export default Settings;
