import { app } from "./firebase/config.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  AppleAuthProvider,
  signOut,
} from "firebase/auth";

export class AuthService {
  constructor() {
    this.auth = getAuth(app);
  }

  // Authentication services
  async signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      return result.user;
    } catch (error) {
      console.error("FirebaseService :: signInWithGoogle :: error", error);
      throw error;
    }
  }

  async signInWithApple() {
    const provider = new AppleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      return result.user;
    } catch (error) {
      console.error("FirebaseService :: signInWithApple :: error", error);
      throw error;
    }
  }

   // Logout/Sign out method
   async logout() {
    try {
      await signOut(this.auth);
      return true;
    } catch (error) {
      console.error("AuthService :: logout :: error", error);
      throw error;
    }
  }
}

const firebaseAuth = new AuthService();
export default firebaseAuth;
