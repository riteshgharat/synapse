import React, { useState } from "react";
import "./LearningSession.css";
import Card from "./Card";
import firebaseAuth from "../../firebase/auth";

function LearningSession() {
  // get the user name
  const user = firebaseAuth.getUser();
  const userName = user.displayName.split(" ")[0];

  // card content
  const cardContent = [
    "Help understand blockchain technology.",
    "Help understand Quantum Mechanics.",
    "Help write a short story.",
    "Help me solve algebric problem",
  ];

  // render the learning session component
  return (
    <div className="w-full h-full flex justify-center bg-Primary">
      <div className="w-full h-auto md:w-3/4">
        <div className="mt-12 mb-12 pl-5 pr-5">
          <p className="text-6xl md:7xl Heading">
            Hello, <span>{userName !== "" ? userName : "Dev"}.</span>
          </p>
          <p className="text-xl md:text-4xl Sub-Heading">
            How can I help you today?
          </p>
        </div>

        {/*Card container */}
        <div className="flex gap-4 p-5 Add-Scrollbar-Hidden">
          {cardContent.map((content, index) => (
            <Card key={index} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearningSession;
