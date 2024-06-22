import React, { useState } from "react";
import "./SubNavbar.css";
import Card from "./Card/Card";
import CloseSubNavSvg from "../../assets/navbar_close.svg?react";

//const textColor = "#3982BF";
//const bgColor = "#DEF0FF";

function SubNavbar({ isSubNavVisible, setIsSubNavVisible }) {
  const closeNavbar = () => {
    setIsSubNavVisible(false);
  };

  if (isSubNavVisible == false) return null;

  return (
    <>
      <div className="bg-Secondary text-PrimaryText Sub-Navbar">
        <div className="w-full h-auto flex justify-around items-center py-2 sticky">
          <h1 className="text-2xl">Chats Sessions</h1>
          <button onClick={closeNavbar}>
            <CloseSubNavSvg className="w-6 h-6 fill-PrimarySvg" />
          </button>
        </div>
        <div className="w-full h-full flex flex-col items-center gap-2 pb-14 Add-Scrollbar">
          <Card description="Yes, I will help you to solve Physics problems" />
          <Card
            mode="math"
            title="math"
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
      <div className="bg-slate-700 Sub-Navbar-Bg"></div>
    </>
  );
}

export default SubNavbar;
