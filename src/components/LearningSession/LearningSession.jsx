import React from "react";
import "./LearningSession.css";

function LearningSession() {
  return (
    <div className="Main bg-white w-full h-full">
      <div className="Main-Container flex-grow">
        <div className="Greet">
          <p className="Heading">Hello,<span>Dev.</span></p>
          <p className="Sub-Heading">How can I help you today?</p>
        </div>

        <div className="Cards flex gap-5">
        <div className="Card w-36 h-28 flex-shrink-0 mt-4 rounded-2xl">
          <p>Help understand Quantum Mechanics</p>
        </div>
        <div className="Card w-36 h-28 flex-shrink-0 mt-4 rounded-2xl">
          <p>Help understand Quantum Mechanics</p>
        </div>
        <div className="Card w-36 h-28 flex-shrink-0 mt-4 rounded-2xl">
          <p>Help understand Quantum Mechanics</p>
        </div>
        <div className="Card w-36 h-28 flex-shrink-0 mt-4 rounded-2xl">
          <p>Help understand Quantum Mechanics</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LearningSession;
