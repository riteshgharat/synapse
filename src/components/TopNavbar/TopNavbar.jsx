import React from "react";
import "./TopNavbar.css";
import OpenNavbarSvg from "../../assets/navbar_open.svg?react";

function TopNavbar({ isSubNavVisible, setIsSubNavVisible }) {
  let visibleOpenNavBtn = "none";
  if (!isSubNavVisible) visibleOpenNavBtn = "block";

  return (
    <div className="w-full min-h-12 flex items-center bg-Primary sticky top-0 left-0">
      <button
        onClick={e => setIsSubNavVisible(!isSubNavVisible)}
        style={{ display: visibleOpenNavBtn }}
      >
        <OpenNavbarSvg className="m-3 h-6 w-6 fill-PrimarySvg" />
      </button>
      <h1 className="w-full m-3 text-xl text-PrimaryText text-left font-normal">
        Synapse AI
      </h1>
    </div>
  );
}

export default TopNavbar;
