import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { TrackerProvider } from 'react-tracker'
import configuredTracker from './tracking/configureTracker';

import "./styles/index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TrackerProvider tracker={configuredTracker}>
    <Router>
      <App />
    </Router>
    </TrackerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
