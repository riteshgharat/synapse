import { useState } from "react";
import "./App.css";
import VerticalNavbar from "./components/VerticalNavbar/VerticalNavbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import InputBar from "./components/InputBar/InputBar";
import LearningSession from "./components/LearningSession/LearningSession";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import SignUp from "./components/SignUp/SignUp";
import TestMode from "./components/TestMode/TestMode";
import ExpertSection from "./components/ExpertSection/ExpertSection";

function App() {
  // useState to manage the visibility of the SubNavbar
  const [isSubNavVisible, setIsSubNavVisible] = useState(true);

  return (
    <>
      <VerticalNavbar />
      <SubNavbar
        isSubNavVisible={isSubNavVisible}
        setIsSubNavVisible={setIsSubNavVisible}
      />
      <div className="h-full w-full md:w-[calc(100%-60px-250px)] flex flex-grow flex-col justify-center items-center">
        <TopNavbar
          isSubNavVisible={isSubNavVisible}
          setIsSubNavVisible={setIsSubNavVisible}
        />
       <ExpertSection/>
      </div>
    </>
  );
}

export default App;
