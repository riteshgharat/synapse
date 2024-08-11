import React from "react";
import { NavLink } from "react-router-dom";

const CreditsPage = () => {
  return (
    <div className="w-full h-auto bg-Primary text-Tertiary min-h-screen flex flex-col Add-Scrollbar-Y">
      <nav className="p-4 flex justify-between items-center">
        <div className="text-xl text-PrimaryText text-left font-normal">
          Synapse AI
        </div>
        <div className="flex space-x-4">
          <NavLink to="/" className="text-PrimaryText hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/about" className="text-PrimaryText hover:text-blue-500">
            About
          </NavLink>
        </div>
      </nav>

      <main className="flex-grow p-8 max-w-3xl mx-auto">
        <h1 className="text-Tertiary text-4xl mb-8 text-center">Credits</h1>

        <section className="bg-Secondary p-6 rounded-lg mb-8">
          <h2 className="text-Quaternary text-3xl mb-4">Development Team</h2>
          <div className="flex flex-wrap justify-around">
            <div className="text-center m-4">
              <div className="text-4xl mb-2">🧑‍💻</div>
              <h3 className="text-Quaternary mb-1">Ritesh</h3>
              <p className="text-Tertiary">Fullstack</p>
            </div>
            <div className="text-center m-4">
              <div className="text-4xl mb-2">🎨</div>
              <h3 className="text-Quaternary mb-1">Sara</h3>
              <p className="text-Tertiary">UI/UX Designer</p>
            </div>
            <div className="text-center m-4">
              <div className="text-4xl mb-2">🤖</div>
              <h3 className="text-Quaternary mb-1">Sahil/Ritesh</h3>
              <p className="text-Tertiary">AI Specialist</p>
            </div>
            <div className="text-center m-4">
              <div className="text-4xl mb-2">⚙️</div>
              <h3 className="text-Quaternary mb-1">Prashant/Hrithik</h3>
              <p className="text-Tertiary">Prompt Engineering</p>
            </div>
          </div>
        </section>

        <section className="bg-Secondary p-6 rounded-lg mb-8">
          <h2 className="text-Quaternary text-3xl mb-4">Technologies Used</h2>
          <div className="flex flex-wrap justify-center">
            <div className="bg-Tertiary text-SecondaryText px-4 py-2 rounded-full m-2">
              React
            </div>
            <div className="bg-Tertiary text-SecondaryText px-4 py-2 rounded-full m-2">
              Node.js
            </div>
            <div className="bg-Tertiary text-SecondaryText px-4 py-2 rounded-full m-2">
              Socket Io
            </div>
            <div className="bg-Tertiary text-SecondaryText px-4 py-2 rounded-full m-2">
              Firebase
            </div>
            <div className="bg-Tertiary text-SecondaryText px-4 py-2 rounded-full m-2">
              Express
            </div>
            <div className="bg-Tertiary text-SecondaryText px-4 py-2 rounded-full m-2">
              Gemini API
            </div>
          </div>
        </section>

        <section className="bg-Secondary p-6 rounded-lg mb-8">
          <h2 className="text-Quaternary text-3xl mb-4">Special Thanks</h2>
          <ul className="list-none pl-0">
            <li className="mb-2 pl-6 relative">
              <span className="absolute left-0 text-Quinary">✓</span> Our beta
              testers for their invaluable feedback
            </li>
            <li className="mb-2 pl-6 relative">
              <span className="absolute left-0 text-Quinary">✓</span> The
              open-source community for their incredible tools
            </li>
            <li className="mb-2 pl-6 relative">
              <span className="absolute left-0 text-Quinary">✓</span> Our
              advisors and mentors for their guidance and support
            </li>
          </ul>
        </section>
      </main>
{/* 
      <footer className="bg-Tertiary text-SecondaryText p-4 text-center">
        <a href="#" className="mx-2 hover:underline">
          Terms of Service
        </a>
        <a href="#" className="mx-2 hover:underline">
          Privacy Policy
        </a>
      </footer> */}
    </div>
  );
};

export default CreditsPage;
