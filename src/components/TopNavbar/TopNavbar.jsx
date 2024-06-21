import React from "react";
import "./TopNavbar.css";
import ToggleNavbarSvg from "../../assets/navbar.svg?react";

function TopNavbar() {
  return (
    <div className="w-full h-12 flex flex-row items-center bg-Primary sticky z-0">
      <ToggleNavbarSvg className="h-6 w-6 md:hidden fill-PrimarySvg"/>
      <h2 className="w-full text-PrimaryText text-center font-semibold">Synapse AI</h2>
    </div>
  );
}

export default TopNavbar;
