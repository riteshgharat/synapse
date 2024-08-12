import React, { useContext } from "react";
import { SessionContext } from "../../context/SessionContext";
import { handleSubmit } from "../InputBar/InputBar";
function Card({ content }) {
  const { setPrompt } = useContext(SessionContext);

  // render the card component
  return (
    <button
      className="w-36 h-28 p-2 border-2 border-Tertiary flex-shrink-0 rounded-2xl cursor-pointer hover:bg-Secondary"
      onClick={e => {
        setPrompt(content);
        handleSubmit(e); // handle the submit event and sending textContent
      }}
    >
      <span className="font-medium text-sm text-PrimaryText">{content}</span>
    </button>
  );
}

export default Card;
