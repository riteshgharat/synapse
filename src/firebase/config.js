import conf from "../conf/conf.js";
import { initializeApp } from "firebase/app";

// Firebase configuration
const app = initializeApp(conf.firebaseConfig);

export { app };