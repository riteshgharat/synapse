import React from "react";

import Math from "../../../assets/math.svg?react";
import Physics from "../../../assets/physics.svg?react";
import Chemistry from "../../../assets/chemistry.svg?react";
import Biology from "../../../assets/biology.svg?react";
import Literature from "../../../assets/literature.svg?react";
import Language from "../../../assets/language.svg?react";
import Economics from "../../../assets/economics.svg?react";
import ComputerScience from "../../../assets/computer_science.svg?react";
import Grades from "../../../assets/grades.svg?react";
import Learning from "../../../assets/learning.svg?react";
import History from "../../../assets/history.svg?react";

function Card({ mode = "learning", title = "learning", description }) {
  let ModeIcon;
  switch (mode) {
    case "math":
      ModeIcon = Math;
      break;
    case "physics":
      ModeIcon = Physics;
      break;
    case "chemistry":
      ModeIcon = Chemistry;
      break;
    case "biology":
      ModeIcon = Biology;
      break;
    case "literature":
      ModeIcon = Literature;
      break;
    case "language":
      ModeIcon = Language;
      break;
    case "economics":
      ModeIcon = Economics;
      break;
    case "history":
      ModeIcon = History;
      break;
    case "computer science":
      ModeIcon = ComputerScience;
      break;
    case "grades":
      ModeIcon = Grades;
      break;
    case "learning":
      ModeIcon = Learning;
      break;
    default:
      ModeIcon = Learning;
  }

  return (
    <div className="w-56 h-16 px-2 py-2 bg-Primary flex rounded-md cursor-pointer hover:border-2 hover:border-Tertiary">
      <ModeIcon className="fill-PrimarySvg w-6 h-6"/>
      <div className="mx-2 w-full">
      <h2>{title.charAt(0).toUpperCase() + title.slice(1, 17)}</h2>
      <span className="w-full text-xs break-words">{description.slice(0, 32)}...</span>
      </div>
    </div>
  );
}

export default Card;
