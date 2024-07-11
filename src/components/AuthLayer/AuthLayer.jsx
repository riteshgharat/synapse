import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/auth";

import VerticalNavbar from "../VerticalNavbar/VerticalNavbar";
import SubNavbar from "../SubNavbar/SubNavbar";
import TopNavbar from "../TopNavbar/TopNavbar";
import InputBar from "../InputBar/InputBar";

function AuthLayer() {
  // get the current location
  const { pathname } = useLocation();

  // state to manage the visibility of the sub navbar
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

  // state to manage the user data
  const [user, setUser] = useState(undefined);

  // useEffect to check if the user is logged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    // Render loading state or null while user info is loading
    return null;
  }

  // if user present and the current path is /auth/signup or /auth/login
  if (user) {
    if (pathname === "/auth/signup" || pathname === "/auth/login") {
      // redirect to the learning page since the user is already logged in
      return <Navigate to="/app/learning" replace />;
    } else {
      // render the main app layout
      return (
        <>
          <VerticalNavbar userData={user} />
          <SubNavbar
            isSubNavVisible={isSubNavVisible}
            setIsSubNavVisible={setIsSubNavVisible}
          />
          <div className="h-full w-full md:w-[calc(100%-60px-250px)] flex flex-grow flex-col justify-center items-center bg-Primary">
            <TopNavbar
              isSubNavVisible={isSubNavVisible}
              setIsSubNavVisible={setIsSubNavVisible}
            />
            <Outlet userData={user} />
            <div
              className={`w-full h-auto ${pathname === "/app/experts" || pathname === "/app/test" ? "hidden" : "block"}`}
            >
              <InputBar />
            </div>
          </div>
        </>
      );
    }
  }
  // if user not present and the current path is /auth/signup or /auth/login
  else if (
    !user &&
    (pathname === "/auth/signup" || pathname === "/auth/login")
  ) {
    return <Outlet />;
  }
  // if user not present and the current path is not /auth/signup or /auth/login
  else {
    return <Navigate to="/auth/signup" replace />;
  }
}

export default AuthLayer;
