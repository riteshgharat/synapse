import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen bg-Primary text-PrimaryText text-center">
      <h1 className="text-7xl font-bold">404</h1>
      <h2 className="text-2xl mt-4">Lost in Space</h2>
      <p className="text-base mt-4 max-w-lg">
        It seems like you’ve ventured into the unknown. The page you’re looking
        for is not available in this galaxy.
      </p>
      <Link
        to="/"
        className="w-auto bg-blue-500 hover:bg-blue-400 text-white font-bold my-3 py-3 px-6 rounded-full transition duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
