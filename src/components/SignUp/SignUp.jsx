import React from "react";
import Model1Svg from "../../assets/model1.svg?react";
import GoogleSvg from "../../assets/google.svg?react";
import AppleSvg from "../../assets/apple.svg?react";

function SignUp() {
  return (
    <>
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full h-3/5 md:w-1/2 md:h-full flex items-center justify-center bg-gradient-to-b md:bg-gradient-to-r from-Tertiary to-Secondary">
          <Model1Svg className="h-full md:h-3/5"/>
        </div>
        <div className="w-full h-2/5 md:w-1/2 md:h-full flex flex-col items-center justify-center bg-Secondary text-PrimaryText">
          <div className="flex flex-col items-center gap-2">
            <h1 className="my-2 text-2xl">Sign Up</h1>
            <button className="w-72 md:w-80 h-12 px-3 inline-flex items-center rounded-md bg-Primary border-2 border-Tertiary">
              <GoogleSvg className="w-7 h-6 mx-2" />
              <span className="w-full mx-auto text-left font-medium">
                Continue with Google
              </span>
            </button>
            <button className="w-72 md:w-80 h-12 px-3 inline-flex items-center rounded-md bg-Primary border-2 border-Tertiary">
              <AppleSvg className="w-6 h-6 mx-2" />
              <span className="w-full mx-auto text-left font-medium">
                Continue with Apple
              </span>
            </button>
            <span>Already signed in? <span className="font-medium cursor-pointer">Log In</span> here</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
