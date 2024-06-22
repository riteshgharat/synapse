import React from "react";
import "./VerticalNavbar.css";
import logo from "../../assets/Logo.png";
import Learning from "../../assets/learning.svg?react";
import Tuition from "../../assets/tution.svg?react";
import Test from "../../assets/test.svg?react";
import User from "../../assets/user.svg?react";
import Logout from "../../assets/logout.svg?react";

function VerticalNavbar() {
  return (
    <div className="bg-Tertiary vertical-navbar flex flex-row justify-evenly md:flex-col items-center md:justify-between">
      <div className="top-icons md:mt-2">
        <img
          src={logo}
          className="h-12 w-[46px] bg-Primary py-1 px-1 rounded-[10px] cursor-pointer LogoImage"
          alt="logo"
        />
        <div className="flex flex-row justify-evenly md:flex-col items-center md:justify-between gap-[18vw] md:gap-0">
          <Learning className="h-10 w-10 fill-SecondarySvg rounded-[10px] bg-Quaternary md:mt-20 px-2 py-2" />
          <Tuition className="h-10 w-10 fill-SecondarySvg rounded-[10px] bg-Quaternary md:mt-4 px-2 py-2" />
          <Test className="h-10 w-10 fill-SecondarySvg rounded-[10px] bg-Quaternary md:mt-4 px-2 py-2" />
        </div>
      </div>
      <div className="md:mb-[18vh] ml-4 md:ml-0">
        <User className="h-10 w-10 fill-SecondarySvg rounded-[10px] bg-Quaternary px-2 py-2 md:mb-4" />
        <Logout className="h-10 w-10 fill-SecondarySvg rounded-[10px] bg-Quaternary px-2 py-2 md:mb-2 Logout" />
      </div>
    </div>
  );
}

export default VerticalNavbar;
