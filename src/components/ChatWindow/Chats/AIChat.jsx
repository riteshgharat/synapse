import React from "react";

function AIChat({profileImg, message}) {
  return (
    <div className="w-full py-2 flex justify-start">
      <div className="w-11/12 md:w-5/6 flex justify-start ml-4">
        <img
          src={profileImg}
          alt="Synapse AI"
          className="w-8 h-8 rounded-md bg-Quaternary"
        />
        <div className=" min-w-[auto] max-w-[90%] ml-2 p-3 rounded-lg text-left bg-transparent text-PrimaryText">
          {message}
        </div>
      </div>
    </div>
  );
}

export default AIChat;
