import React, { useState } from "react";
import "./SubNavbar.css";
import Card from "./Card/Card";
import CloseSubNavSvg from "../../assets/navbar_close.svg?react";
import CreateSvg from "../../assets/create.svg?react";

function SubNavbar({ isSubNavVisible, setIsSubNavVisible }) {
  // state to manage the visibility of the sub navbar
  const closeNavbar = () => {
    setIsSubNavVisible(false);
  };

  if (isSubNavVisible == false) return null;

  // render the sub navbar component
  return (
    <>
      <div className="bg-Secondary text-PrimaryText Sub-Navbar">
        <div className="w-full h-auto flex justify-around items-center py-2 sticky">
          <h1 className="text-xl">Chats Sessions</h1>
          <button>
            <CreateSvg className="w-6 h-6 p-1 bg-Primary fill-PrimarySvg rounded-md" />
          </button>
          <button onClick={closeNavbar}>
            <CloseSubNavSvg className="w-6 h-6 fill-PrimarySvg" />
          </button>
        </div>

        {/* Session history container */}
        <div className="w-full h-full flex flex-col items-center gap-2 pb-14 Add-Scrollbar">
          <Card description="Yes, I will help you to solve Physics problems" />
          <Card
            mode="mathematics"
            title="mathematics"
            description="Sure, I will help to with solving Math problems"
          />
          <Card
            mode="physics"
            title="physics"
            description="Yes, I will help you to solve Physics problems"
          />
          <Card
            mode="chemistry"
            title="chemistry"
            description="Yes, I will help you to solve Physics problems"
          />
          <Card
            mode="biology"
            title="biology"
            description="Yes, I will help you to solve Physics problems"
          />
          <Card
            mode="computer science"
            title="computer science"
            description="Yes, I will help you to solve Physics problems"
          />
          <Card
            mode="history"
            title="History"
            description="Yes, I will help you to solve Physics problems"
          />
          <Card
            mode="economics"
            title="economics"
            description="Yes, I will help you to solve Physics problems"
          />
          <Card
            mode="literature"
            title="literature"
            description="Yes, I will help you to solve Physics problems"
          />
          <Card
            mode="language"
            title="language"
            description="Yes, I will help you to solve Physics problems"
          />
          <Card
            mode="grades"
            title="grades"
            description="Yes, I will help you to solve Physics problems"
          />
          <Card description="Yes, I will help you to solve Physics problems" />
        </div>
      </div>
      
      <div className="bg-slate-700 Sub-Navbar-Bg" onClick={closeNavbar}></div>
    </>
  );
}

export default SubNavbar;
