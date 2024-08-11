import React from "react";
import { NavLink } from "react-router-dom"; 

const AboutPage = () => {
  return (
    <div className="w-full h-auto bg-Primary text-PrimaryText min-h-screen flex flex-col Add-Scrollbar-Y">
      <nav className="p-4 flex justify-between items-center">
        <div className="text-xl text-PrimaryText text-left font-normal">
          Synapse AI
        </div>
        <div className="flex space-x-4">
          <NavLink to="/" className="text-PrimaryText hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/credits" className="text-PrimaryText hover:text-blue-500">
            Credits
          </NavLink>
        </div>
      </nav>

      <main className="flex-grow p-8 max-w-3xl mx-auto">
        <h1 className="text-SecondarText text-4xl mb-8 text-center">
          About Synapse
        </h1>

        <section className="bg-Secondary p-6 rounded-lg mb-8">
          <h2 className="text-Quaternary text-3xl mb-4">Our Mission</h2>
          <p className="mb-4 leading-relaxed">
            At Synapse, we're revolutionizing personalized tutoring through the
            power of AI. We believe that every student deserves access to
            high-quality, tailored educational support, anytime and anywhere.
            Our goal is to empower learners, ignite curiosity, and foster a love
            for lifelong learning.
          </p>
        </section>

        <section className="bg-Secondary p-6 rounded-lg mb-8">
          <h2 className="text-Quaternary text-3xl mb-4">What We Offer</h2>
          <ul className="list-none pl-0">
            <li className="mb-2 pl-6 relative">
              <span className="absolute left-0 text-Quinary">✓</span> 24/7
              instant homework help
            </li>
            <li className="mb-2 pl-6 relative">
              <span className="absolute left-0 text-Quinary">✓</span>{" "}
              Personalized learning experiences
            </li>
            <li className="mb-2 pl-6 relative">
              <span className="absolute left-0 text-Quinary">✓</span> Expert
              tutoring support
            </li>
            <li className="mb-2 pl-6 relative">
              <span className="absolute left-0 text-Quinary">✓</span>{" "}
              Comprehensive subject coverage
            </li>
            <li className="mb-2 pl-6 relative">
              <span className="absolute left-0 text-Quinary">✓</span>{" "}
              Interactive problem-solving
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

export default AboutPage;
