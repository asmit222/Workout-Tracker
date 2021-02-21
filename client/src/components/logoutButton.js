import React, { Component, Suspense, lazy, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  const [logoutButtonClassName, setLogoutButtonClassName] = useState("");

  return (
    isAuthenticated && (
      <React.Fragment>
        <button
          className={`logOutButtonApp ${logoutButtonClassName} button is-danger`}
          onClick={() => {
            logout();
            setLogoutButtonClassName("is-loading");
          }}
        >
          Log Out
        </button>
      </React.Fragment>
    )
  );
};

export default LogoutButton;
