import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const path = require("path");

ReactDOM.render(<App />, document.getElementById("root"));

if ('serviceWorker' in navigator) {
     window.addEventListener('load', () => {
       navigator.serviceWorker.register(path.resolve(__dirname, '../dist', 'service-worker.js'))
      .then(registration => {
         console.log('SW registered: ', registration);
       }).catch(registrationError => {
         console.log('SW registration failed: ', registrationError);
      });
     });
   }

