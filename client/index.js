import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const path = require("path");
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

ReactDOM.render(<App />, document.getElementById("root"));

if ('serviceWorker' in navigator) {
     window.addEventListener('load', () => {
      // navigator.serviceWorker.register(path.resolve(__dirname, '../dist', 'service-worker.js'), {scope: '/'})
      navigator.serviceWorker.register('service-worker.js')
      // navigator.serviceWorker.register(path.resolve(__dirname, '../dist', 'service-worker.js'))
      .then(registration => {
         console.log('SW registered: ', registration, 'scope is ', registration.scope);
       }).catch(registrationError => {
         console.log('SW registration failed: ', registrationError);
      });
     });
   }

