
const conf = {
  // Firebase configuration from .env file
  firebaseConfig: {
    apiKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
    authDomain: String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
    projectId: String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
    storageBucket: String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
    messagingSenderId: String(import.meta.env.VITE_FIREBASE_MSG_SENDER_ID),
    appId: String(import.meta.env.VITE_FIREBASE_APP_ID),
  },
};

export default conf;

