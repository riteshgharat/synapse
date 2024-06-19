import { useState } from "react";
import "./App.css";
import VerticalNavbar from "./components/Navbar/VerticalNavbar/VerticalNavbar";
import TopNavbar from "./components/Navbar/TopNavbar/TopNavbar";
import SubNavbar from "./components/Navbar/SubNavbar/SubNavbar";
import InputBar from "./components/InputBar/InputBar";
import LearningSession from "./components/LearningSession/LearningSession";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <VerticalNavbar />
      <SubNavbar />
      <div className="wd-auto flex">
        <TopNavbar />
        <LearningSession />
        <InputBar />
      </div>
    </>
  );
}

export default App;
