import React from "react";
import "./LearningSession.css";

function LearningSession() {
  return (
    <div className="ls-main w-full flex-grow">
      <div className="p-tag">
        <p className="title">
          Hello, <span>Dev</span>
        </p>
        <p className="greet">How can I help you today?</p>
      </div>
      <div className="cards flex">
        <div className="card card-1">
          <p>Help me solve a algebric problem</p>
        </div>
        <div className="card card-2">
          <p>Help write a short story.</p>
        </div>
        <div className="card card-3">
          <p>Help understand Quantum Mechanics</p>
        </div>
        <div className="card card-4">
          <p>Help understand Vectors</p>
        </div>
      </div>
    </div>
  );
}

export default LearningSession;
