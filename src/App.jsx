import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayer from "./utils/AuthLayer";

import SignUp from "./components/SignUp/SignUp";
import LearningSession from "./components/LearningSession/LearningSession";
import TestMode from "./components/TestMode/TestMode";
import ExpertSection from "./components/ExpertSection/ExpertSection";
import ChatSession from "./components/ChatSession/ChatSession";

function App() {
  // const [user, setUser] = useState(null);
  // const [isFetching, setIsFetching] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, user => {
  //     if (user) {
  //       setUser(user);
  //       setIsFetching(false);
  //       // console.log(user);
  //       return;
  //     }
  //     setUser(null);
  //     setIsFetching(false);
  //   });
  //   return () => unsubscribe();
  // }, []);

  // if (isFetching) {
  //   return <h1>Loading</h1>;
  // }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index path="/" element={<SignUp />} /> */}
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<AuthLayer />}>
          <Route path="/app/learning" element={<LearningSession />} />
          <Route path="/app/test" element={<TestMode />} />
          <Route path="/app/experts" element={<ExpertSection />} />
          <Route path="/app/chat" element={<ChatSession />} />
        </Route>
        <Route path="*" element={<h1>404 Error</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
