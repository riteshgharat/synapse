import conf from "../conf/conf.js";
import { initializeApp } from "firebase/app";

const app = initializeApp(conf.firebaseConfig);

export default app;
