import React from "react";
import UserProfileSvg from '../../../assets/user.svg?react'

function UserChat({profileImg, message}) {
  return (
    <div className="w-full py-2 flex justify-end">
      <div className="w-11/12 md:w-5/6 flex justify-end mr-4">
        <UserProfileSvg className="min-w-8 min-h-8 max-h-8 max-w-8 rounded-md p-1 fill-SecondarySvg bg-Quaternary" />
        <div className="min-w-[auto] max-w-[90%] ml-2 p-3 rounded-lg text-left bg-Secondary text-PrimaryText">
          {message}
        </div>
      </div>
    </div>
  );
}

export default UserChat;
