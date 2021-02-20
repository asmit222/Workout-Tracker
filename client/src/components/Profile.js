import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = (props) => {
  const { user, isAuthenticated } = useAuth0();

  // useEffect(() => {
  //   props.logIn();
  //   console.log("loggedIn");
  // });

  return (
    isAuthenticated && (
      <div>
        {props.logIn(user)}
        {/* <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} /> */}
      </div>
    )
  );
};

export default Profile;
