import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("human");

  return (
    <div className="w-full min-h-screen flex flex-col bg-Secondary Add-Scrollbar-Y">
      <nav className="p-4 flex justify-between items-center">
        <div className="text-xl text-PrimaryText text-left font-normal">
          Synapse AI
        </div>
        <div className="flex space-x-4">
          <NavLink to="/about" className="text-PrimaryText hover:text-blue-500">
            About
          </NavLink>
          <NavLink to="/credits" className="text-PrimaryText hover:text-blue-500">
            Credits
          </NavLink>
        </div>
      </nav>

      <main className="flex-grow flex flex-col-reverse md:flex-row items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full md:w-1/2 mt-8 md:ml-5 md:mt-0 md:pr-8 ">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text mb-4">
            Synapse
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-4 text-PrimaryText">
            The Future of Personalized Tutoring
          </p>
          <p className="text-base mb-6 opacity-60 text-PrimaryText">
            Instant help with homework, assignments, and concepts anytime,
            anywhere.
          </p>
          <NavLink
            to="/app/learning"
            className="w-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Get Started
          </NavLink>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative flex justify-center">
            <img
              src="/model1.png"
              alt="AI Robot"
              className="w-96 md:w-full rounded-lg Main-Animation"
            />
            <div className="absolute bottom-6 right-4 bg-white bg-opacity-90 text-sm px-3 py-2 rounded-full inline-flex items-center justify-center shadow-md">
              <img
                src={
                  typingStatus === "human"
                    ? "https://avatar.iran.liara.run/public"
                    : "/logo.png"
                }
                alt="avatar"
                className="w-8 h-8 mr-2 rounded-full"
              />
              <TypeAnimation
                sequence={[
                  "Hey, can you explain what photosynthesis is?",
                  2000,
                  () => setTypingStatus("bot"),
                  "Sure, Photosynthesis is the process by which plants convert sunlight, water, and carbon dioxide into glucose and oxygen...",
                  2000,
                  () => setTypingStatus("human"),
                  "How does a black hole form?",
                  2000,
                  () => setTypingStatus("bot"),
                  "A black hole forms when a massive star collapses under its own gravity at the end of its life cycle, compressing matter into an infinitely dense point called a singularity...",
                  2000,
                  () => setTypingStatus("human"),
                  "What was the significance of the Industrial Revolution?",
                  2000,
                  () => setTypingStatus("bot"),
                  "The Industrial Revolution marked a period of significant technological, economic, and social change, transforming societies from agrarian to industrial...",
                ]}
                wrapper="span"
                style={{ color: "#224a6d" }}
                omitDeletionAnimation
                cursor={true}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </main>
      {/* 
      <footer className="w-full p-4 text-center text-sm">
        <a href="#" className="mr-4 hover:underline">
          Terms of Service
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </footer> */}
    </div>
  );
};

export default HomePage;
