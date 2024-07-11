import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayer from "./components/AuthLayer/AuthLayer";
import AuthPage from "./components/AuthPage/AuthPage";
import LearningSession from "./components/LearningSession/LearningSession";
import TestMode from "./components/TestMode/TestMode";
import ExpertSection from "./components/ExpertSection/ExpertSection";
import Expert from "./components/ExpertSection/Expert";
import ChatSession from "./components/ChatSession/ChatSession";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Unprotected Routes */}
        <Route index path="/" element={<h1>Home</h1>} />

        {/* Protected Routes */}
        <Route element={<AuthLayer />}>
          <Route path="/auth/signup" element={<AuthPage />} />
          <Route path="/auth/login" element={<AuthPage />} />

          <Route path="/app/learning" element={<LearningSession />} />
          <Route path="/app/test" element={<TestMode />} />
          <Route path="/app/experts" element={<ExpertSection />} />
          <Route path="/app/expert/:expertId" element={<Expert />} />
          <Route path="/app/chat" element={<ChatSession />} />
        </Route>

        {/* 404 Error */}
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
