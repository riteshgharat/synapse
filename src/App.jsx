import { useState } from "react";
import "./App.css";
import VerticalNavbar from "./components/VerticalNavbar/VerticalNavbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import InputBar from "./components/InputBar/InputBar";
import LearningSession from "./components/LearningSession/LearningSession";
import SignUp from "./components/SignUp/SignUp";

function App() {
  // useState to manage the visibility of the SubNavbar
  const [isSubNavVisible, setIsSubNavVisible] = useState(true);

  return (
    <>
      <VerticalNavbar />
      <SubNavbar isSubNavVisible={isSubNavVisible} setIsSubNavVisible={setIsSubNavVisible}/>
      <div className="h-full w-auto flex flex-grow flex-col justify-center items-center">
        <TopNavbar isSubNavVisible={isSubNavVisible} setIsSubNavVisible={setIsSubNavVisible}/>
        <LearningSession />
        <InputBar />
      </div>
    </>
  );
}

export default App;