import React from "react";
import "./Pages.css";

export default function About() {
  return (
    <div className="page-container">
      <h1>About EVisionDrive</h1>
      <p>
        EVisionDrive is a smart electric vehicle range estimator that predicts
        how far an EV can travel based on model, battery level, and driving speed.
      </p>
      <p>
        Built using <strong>React</strong> and <strong>Flask</strong>, this app demonstrates
        the use of data-driven insights in clean energy technology.
      </p>
      <p>
        Future plans include machine learning–based range prediction and integration with live weather and route data.
      </p>
    </div>
  );
}
