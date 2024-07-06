import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/auth";

import VerticalNavbar from "../components/VerticalNavbar/VerticalNavbar";
import SubNavbar from "../components/SubNavbar/SubNavbar";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import InputBar from "../components/InputBar/InputBar";

function AuthLayer({ children }) {
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        return;
      }
      setUser(null);
    });
    return () => unsubscribe();
  }, []);
  
  console.log(user);
  return user ? (
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
        <InputBar />
      </div>
    </>
  ) : (
    <Navigate to="/auth/signup" />
  );
}

export default AuthLayer;
