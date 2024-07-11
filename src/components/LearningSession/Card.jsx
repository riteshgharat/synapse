import React from "react";

function Card({content}) {
  // render the card component
  return (
    <button className="w-36 h-28 p-2 border-2 border-Tertiary flex-shrink-0 rounded-2xl cursor-pointer hover:bg-Secondary">
      <span className="font-medium text-sm text-PrimaryText">
        {content}
      </span>
    </button>
  );
}

export default Card;
