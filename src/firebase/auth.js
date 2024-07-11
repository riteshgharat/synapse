import { app } from "./config.js";

import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Firebase Auth instance
export const auth = getAuth(app);

export class AuthService {
  // Constructor
  constructor() {
    this.auth = auth;
  }

  // Authentication services
  async signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(this.auth, googleProvider);
      // This gives you a Google Access Token.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user;
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  }

  // async signInWithApple() {
  //   const appleProvider = new OAuthProvider('apple.com')
  //   try {
  //     const result = await signInWithPopup(this.auth, appleProvider);
  //     // This gives you an Apple Access Token.
  //     const credential = OAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     return user;
  //   } catch (error) {
  //     console.error("Error during Apple sign-in:", error);
  //   }
  // }

  // Logout/Sign out method
  async logout() {
    try {
      await signOut(this.auth);
      console.log("User signed out.");
      return true;
    } catch (error) {
      console.error("Error during sign-out:", error);
      return false;
    }
  }

  async getUser() {
    return await this.auth.currentUser;
  }
}

// Create an instance of the AuthService class
const firebaseAuth = new AuthService();

export default firebaseAuth;