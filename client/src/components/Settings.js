import React, { Component } from "react";

import LogoutButton from "./logoutButton.js";

class Settings extends Component {
  render() {
    return (
      <div className="settingsContainer">
        <LogoutButton />
      </div>
    );
  }
}

export default Settings;
