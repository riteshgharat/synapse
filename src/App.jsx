import { useState } from "react";
import "./App.css";
import VerticalNavbar from "./components/VerticalNavbar/VerticalNavbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import InputBar from "./components/InputBar/InputBar";
import LearningSession from "./components/LearningSession/LearningSession";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignUp />
    </>
  );
}

export default App;

/**
    <VerticalNavbar />
      <SubNavbar />
      <div className="flex flex-grow flex-col">
        <TopNavbar />
        <LearningSession />
        <InputBar />
      </div>
**/
