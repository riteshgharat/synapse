// SessionContext.js
import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import firebaseDB from "../firebase/db";
import { auth } from "../firebase/auth";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [promptFromCard, setPromptFromCard] = useState("");
  const [response, setResponse] = useState("");
  const [fileResult, setFileResult] = useState(null);
  const [fileData, setFileData] = useState({ url: null, file: null, success: false });
  const [activeSession, setActiveSession] = useState({
    sessionId: 0,
    isActive: false,
  });
  const [sessionHistory, setSessionHistory] = useState(undefined);
  const [user, setUser] = useState(undefined);
  const [ChatSessions, setChatSessions] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);

      // Get the sessions from the database
      if (currentUser) {
        firebaseDB.getSessions(currentUser.uid, sessions => {
          if (sessions) {
            setChatSessions(sessions);
            //console.log("Fetch Data Successfullt!");
          } else {
            console.error("Error occurred while fetching sessions.");
          }
        });
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        user,
        isSubNavVisible,
        setIsSubNavVisible,
        prompt,
        setPrompt,
        promptFromCard,
        setPromptFromCard,
        response,
        setResponse,
        fileResult,
        setFileResult,
        fileData,
        setFileData,
        sessionHistory,
        setSessionHistory,
        activeSession,
        setActiveSession,
        ChatSessions,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
