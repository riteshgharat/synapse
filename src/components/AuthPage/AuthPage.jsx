import React from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import Model1Svg from "../../assets/model1.svg?react";
import GoogleSvg from "../../assets/google.svg?react";
import AppleSvg from "../../assets/apple.svg?react";

import firebaseAuth from "../../firebase/auth";

function AuthPage() {
  // get the current location
  const { pathname } = useLocation();
  // navigate function
  const navigate = useNavigate();

  // function to handle the google sign in
  async function handleGoogleSignIn() {
    try {
      const result = await firebaseAuth.signInWithGoogle();
      if (result) navigate("/app/learning");
    } catch (err) {
      console.log(err);
    }
  }

  // async function handleAppleSignIn() {
  //   try{
  //     const result = await firebaseAuth.signInWithApple();
  //     console.log(result);
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }

  return (
    <>
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full h-3/5 md:w-1/2 md:h-full flex items-center justify-center bg-gradient-to-b md:bg-gradient-to-r from-Tertiary to-Secondary">
          <Model1Svg className="h-full md:h-3/5" />
        </div>
        <div className="w-full h-2/5 md:w-1/2 md:h-full flex flex-col items-center justify-center bg-Secondary text-PrimaryText">
          <div className="flex flex-col items-center gap-2">
            <h1 className="my-2 text-2xl">
              {pathname === "/auth/signup" ? "Sign Up" : "Log In"}
            </h1>
            <button
              onClick={handleGoogleSignIn}
              className="w-72 md:w-80 h-12 px-3 inline-flex items-center rounded-md bg-Primary border-2 border-Tertiary"
            >
              <GoogleSvg className="w-7 h-6 mx-2" />
              <span className="w-full mx-auto text-left font-medium">
                Continue with Google
              </span>
            </button>
            {/* 
            <button
              onClick={handleAppleSignIn}
              className="w-72 md:w-80 h-12 px-3 inline-flex items-center rounded-md bg-Primary border-2 border-Tertiary"
            >
              <AppleSvg className="w-6 h-6 mx-2" />
              <span className="w-full mx-auto text-left font-medium">
                Continue with Apple
              </span>
            </button> */}

            {/* to interchange signup and login page */}
            {pathname == "/auth/signup" ? (
              <span>
                Already signed in?{" "}
                <NavLink to="/auth/login">
                  <span className="font-medium cursor-pointer">Log In</span>
                </NavLink>{" "}
                here
              </span>
            ) : (
              <span>
                Don't have an account?{" "}
                <NavLink to="/auth/signup">
                  <span className="font-medium cursor-pointer">Sign Up</span>
                </NavLink>{" "}
                here
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
