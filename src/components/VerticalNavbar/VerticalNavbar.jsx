import React from "react";
import { useNavigate } from "react-router-dom";
import "./VerticalNavbar.css";

import logo from "../../assets/Logo.png";
import LearningSVG from "../../assets/learning.svg?react";
import TuitionSVG from "../../assets/tution.svg?react";
import TestSVG from "../../assets/test.svg?react";
import UserSVG from "../../assets/user.svg?react";
import LogoutSVG from "../../assets/logout.svg?react";

import firebaseAuth from "../../firebase/auth";

function VerticalNavbar({ userData }) {
  const userAvtar = userData.photoURL;
  const navigate = useNavigate();
  async function handelLogout() {
    try {
      const state = await firebaseAuth.logout();
      console.log(state);
      if (state) navigate("auth/signup");
    } catch (error) {
      console.log("Error during sign-out:", error);
    }
  }

  return (
    <div className="bg-Tertiary vertical-navbar flex flex-row justify-center md:flex-col items-center md:justify-between">
      <div className="w-full flex flex-row justify-evenly md:hidden py-6 ml-4">
        <LearningSVG className="h-9 w-9  md:ml-0 fill-SecondarySvg rounded-[10px] bg-Quaternary md:mb-[-5vh] px-1.5 py-1.5" />
        <TuitionSVG className="h-9 w-9  md:ml-0 fill-SecondarySvg rounded-[10px] bg-Quaternary md:mb-[-5vh] px-2 py-2" />
        <TestSVG className="h-9 w-9  md:ml-0 fill-SecondarySvg rounded-[10px] bg-Quaternary px-2 py-2" />
        <UserSVG className="h-9 w-9  md:ml-0 md:mt-[34vh] fill-SecondarySvg rounded-[10px] bg-Quaternary px-2 py-2 md:hidden" />
      </div>
      <div className="top-icons md:mt-2">
        <img
          src={logo}
          className="h-12 w-[46px] bg-Primary mt-5 py-1 px-1 rounded-[10px] cursor-pointer LogoImage"
          alt="logo"
        />
        <div className="h-[41vh] flex flex-row justify-start gap-4 my-5 md:flex-col md:mt-[13vh] md:my-0 md:ml-[0.2vw] Hidden">
          <LearningSVG className="h-10 w-10 fill-SecondarySvg rounded-[10px] bg-Quaternary  px-1.5 py-1.5  Hidden" />
          <TuitionSVG className="h-10 w-10 fill-SecondarySvg rounded-[10px] bg-Quaternary px-2 py-2 Hidden" />
          <TestSVG className="h-10 w-10 fill-SecondarySvg rounded-[10px] bg-Quaternary px-2 py-2 Hidden" />
          <UserSVG className="h-10 w-10 md:mt-[34vh] fill-SecondarySvg rounded-[10px] bg-Quaternary px-2 py-2 md:hidden Hidden" />
        </div>
      </div>
      <div className=" h-[25vh] md:mb-[18vh] ml-4 md:ml-0 flex flex-col justify-center mt-2">
        {!userAvtar ? (
          <UserSVG className="h-10 w-10 ml-[11vw] md:ml-0 fill-SecondarySvg rounded-[10px] bg-Quaternary px-2 py-2 md:mb-4 User" />
        ) : (
          <img
            src={userAvtar}
            alt="User Profile"
            className="h-10 w-10 ml-[11vw] md:ml-0 fill-SecondarySvg rounded-[10px] bg-Quaternary px-2 py-2 md:mb-4 User"
          />
        )}
        <button onClick={handelLogout}>
          <LogoutSVG className="h-10 w-10 fill-SecondarySvg rounded-[10px] bg-Quaternary px-2 py-2 md:mb-4 Logout" />
        </button>
      </div>
    </div>
  );
}

export default VerticalNavbar;
