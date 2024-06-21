import React from "react";
import "./TopNavbar.css";
import NavbarTop from "../../assets/navbar.svg?react";
function TopNavbar() {
  return <div className="w-full h-12 bg-slate-#3F424A Topnavbar flex flex-row items-center justify-center relative">
      <h4 className="text-SecondaryText text-center">AI TUTOR</h4>
      <NavbarTop className=" h-5 w-5 fill-SecondarySvg absolute right-2"/>
  </div>;
}

export default TopNavbar;
