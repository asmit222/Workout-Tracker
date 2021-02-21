import React, { Component, Suspense, lazy, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LazyCss = lazy(() => import("./LazyCss.js"));

const LoginButton = (props) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const [loginButtonClassName, setLoginButtonClassName] = useState("");

  return (
    !isAuthenticated && (
      <div>
        <Suspense fallback={<div id="hide"></div>}>
          <LazyCss />
        </Suspense>

        <div className="loginBackground">
          <div className="buttonContainer">
            {console.log("loggingIn: ", props.loggingIn())}
            {!props.loggingIn() ? (
              <button
                onClick={() => {
                  setLoginButtonClassName("is-loading");
                  loginWithRedirect();
                }}
                href=""
                className={`button ${loginButtonClassName} is-info is-large`}
              >
                Log in
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                href=""
                className="button is-loading is-info is-large"
              >
                Log in
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default LoginButton;
