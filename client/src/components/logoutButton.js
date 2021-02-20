import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <React.Fragment>
        <button
          className="logOutButtonApp button is-danger"
          onClick={() => logout()}
        >
          Log Out
        </button>
      </React.Fragment>
    )
  );
};

export default LogoutButton;
