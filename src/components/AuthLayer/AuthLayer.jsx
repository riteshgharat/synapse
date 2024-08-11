// AuthLayer.js
import React, { useContext, useMemo } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { SessionContext } from "../../context/SessionContext";
import VerticalNavbar from "../VerticalNavbar/VerticalNavbar";
import SubNavbar from "../SubNavbar/SubNavbar";
import TopNavbar from "../TopNavbar/TopNavbar";
import InputBar from "../InputBar/InputBar";

function AuthLayer() {
  // get the current location
  const { pathname } = useLocation();
  // get the user data form the context
  const { user } = useContext(SessionContext);

  // return the JSX for the AuthLayer component
  const mainAppLayout = useMemo(
    () => (
      <>
        <VerticalNavbar />
        <SubNavbar />
        <div className="h-full w-full md:w-[calc(100%-60px-250px)] flex flex-grow flex-col justify-center items-center bg-Primary">
          <TopNavbar />
          <Outlet />
          <div
            className={`w-full h-auto ${pathname === "/app/experts" ? "hidden" : "block"}`}
          >
            <InputBar />
          </div>
        </div>
      </>
    ),
    [user, pathname]
  );

  if (user === undefined) {
    return null; // Render loading state or null while user info is loading
  }

  // check if the user is logged in
  if (user) {
    if (pathname === "/auth/signup" || pathname === "/auth/login") {
      return <Navigate to="/app/learning" replace />;
    } else {
      return mainAppLayout;
    }
  } else {
    if (pathname === "/auth/signup" || pathname === "/auth/login") {
      return <Outlet />;
    } else {
      return <Navigate to="/auth/signup" replace />;
    }
  }
}

export default AuthLayer;