import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CreditsPage from "./pages/CreditsPage/CreditsPage";
import NotFound from "./pages/NotFound/NotFound";
// Auth Components
import AuthLayer from "./components/AuthLayer/AuthLayer";
import AuthPage from "./pages/AuthPage/AuthPage";
// App Components
import LearningSession from "./components/LearningSession/LearningSession";
import ExpertSection from "./components/ExpertSection/ExpertSection";
import Expert from "./components/ExpertSection/Expert";
import ChatSession from "./components/ChatSession/ChatSession";
// Context
import { SessionProvider } from "./context/SessionContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Unprotected Routes */}
        <Route index path="/" element={<HomePage />} />
        <Route index path="/about" element={<AboutPage />} />
        <Route index path="/credits" element={<CreditsPage />} />

        {/* Protected Routes */}
        <Route
          element={
            <SessionProvider>
              <AuthLayer />
            </SessionProvider>
          }
        >
          <Route path="/auth/signup" element={<AuthPage />} />
          <Route path="/auth/login" element={<AuthPage />} />

          <Route path="/app/learning" element={<LearningSession />} />
          <Route path="/app/experts" element={<ExpertSection />} />
          <Route path="/app/expert/:expertId" element={<Expert />} />
          <Route
            path="/app/chat/:expertId/:sessionId"
            element={<ChatSession />}
          />
        </Route>

        {/* 404 Error */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;