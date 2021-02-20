import React, { Component, Suspense, lazy } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LazyCss = lazy(() => import("./LazyCss.js"));

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div>
        <Suspense fallback={<div id="hide"></div>}>
          <LazyCss />
        </Suspense>

        <div className="loginBackground">
          <div className="buttonContainer">
            <button
              onClick={() => loginWithRedirect()}
              href=""
              className="button is-info is-large"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginButton;
