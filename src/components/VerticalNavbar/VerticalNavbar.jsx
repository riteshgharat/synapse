import React, { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import logo from "/logo.png";
import LearningSVG from "../../assets/learning.svg?react";
import TuitionSVG from "../../assets/tution.svg?react";
import UserSVG from "../../assets/user.svg?react";
import LogoutSVG from "../../assets/logout.svg?react";

import firebaseAuth from "../../firebase/auth";

import { SessionContext } from "../../context/SessionContext";

function VerticalNavbar() {
  const { user } = useContext(SessionContext);

  // state to manage the display of the user profile
  const [displayUserProfile, setdisplayUserProfile] = useState(false);

  // get the user data
  const userAvtar = user.photoURL;
  const navigate = useNavigate();

  // function to handle the sign-out
  async function handelLogout() {
    try {
      const state = await firebaseAuth.logout();
      if (state) navigate("auth/signup");
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  }

  // return the JSX for the VerticalNavbar component
  return (
    <div className="w-full h-14 p-2 md:p-0 md:w-14 md:h-full flex flex-row md:flex-col items-center justify-evenly bg-Tertiary">
      {/* Logo container */}
      <NavLink to="/">
        <img
          src={logo}
          className="h-9 p-1 bg-Primary rounded-[10px] cursor-pointer hidden md:block md:absolute md:top-2 left-2"
          alt="logo"
        />
      </NavLink>

      {/* Navigation links container */}
      <div className="h-full w-full md:h-auto md:w-auto flex flex-row justify-around md:flex-col gap-0 md:gap-3">
        <NavLink
          to="/app/learning"
          className={({ isActive }) =>
            `rounded-[10px] fill-SecondarySvg hover:scale-110 ${isActive ? "bg-Quinary" : "bg-Quaternary"}`
          }
        >
          <LearningSVG className="h-9 w-9 px-2 py-2" />
        </NavLink>
        <NavLink
          to="/app/experts"
          className={({ isActive }) =>
            `rounded-[10px] fill-SecondarySvg hover:scale-110 ${isActive ? "bg-Quinary" : "bg-Quaternary "}`
          }
        >
          <TuitionSVG className="h-9 w-9 px-2 py-2" />
        </NavLink>

        {/* just empty space container */}
        <div className="hidden md:block h-[30vh]"></div>

        {/* if user present then render user avtar image */}
        {!userAvtar ? (
          <UserSVG className="h-9 w-9 fill-SecondarySvg rounded-[10px] bg-Quaternary px-2 py-2" />
        ) : (
          <span
            onClick={() => setdisplayUserProfile(!displayUserProfile)}
            className="relative"
          >
            {/* User profile PopUp */}
            <div
              className={`${displayUserProfile ? "flex" : "hidden"} min-w-52 max-w-60 h-auto flex-col p-2 gap-1 absolute right-0 bottom-16 md:right-auto md:left-14 md:bottom-0 bg-Secondary rounded-md border-2 border-Tertiary overflow-hidden text-left`}
            >
              <span className="text-PrimaryText text-wrap break-words">
                {user.displayName}
              </span>
              <div className="h-[1px] bg-Tertiary hidden md:block">&nbsp;</div>
              <span className="text-PrimaryText text-wrap break-words">
                {user.email}
              </span>
              <div className="h-[1px] bg-Tertiary md:hidden">&nbsp;</div>
              <button
                onClick={handelLogout}
                className="w-full h-9 gap-2 inline-flex items-center text-PrimaryText md:hidden active:scale-95"
              >
                <LogoutSVG className="w-6 h-6 fill-PrimarySvg" /> Log Out
              </button>
            </div>

            <img
              src={userAvtar}
              alt="User Profile"
              className="h-9 w-9 fill-SecondarySvg rounded-full bg-Quaternary bg-cover border-2 border-Quaternary hover:scale-110"
            />
          </span>
        )}

        {/* Logout button for lg screens*/}
        <button onClick={handelLogout} className="hidden md:block">
          <LogoutSVG className="h-9 w-9 fill-SecondarySvg rounded-[10px] bg-Quaternary px-2 py-2" />
        </button>
      </div>
    </div>
  );
}

export default VerticalNavbar;
