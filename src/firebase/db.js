import { app } from "./config.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import firebaseAuth from "./auth.js";

export class DBService {
  constructor() {
    this.database = getFirestore(app);
  }

  // Firestore services
  async createSession(sessionData) {
    let userId = this.getuserId(); // get the user ID
    console.log("User ID:", userId);
    try {
      //await setDoc(doc(this.database, this.userId, sessionId), sessionData);
      //return true;
      const docRef = doc(collection(this.database, userId)); // Automatically generates a unique ID
      await setDoc(docRef, sessionData); // Set the data
      return docRef; // Return the generated ID
    } catch (error) {
      console.error("Create Session :: error", error);
      return false;
    }
  }

  async getSession(sessionId) {
    let userId = this.getuserId(); // get the user ID
    console.log("User ID:", userId);
    try {
      const docRef = doc(this.database, userId, sessionId); // Reference to the specific document
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return null;
      }
    } catch (error) {
      console.error("Get Session :: error", error);
      return false;
    }
  }

  async getSessions() {
    let userId = this.getuserId(); // get the user ID
    console.log("User ID:", userId);
    try {
      const collectionRef = collection(this.database, userId); // Reference to the user's collection
      const querySnapshot = await getDocs(collectionRef); // Get all documents in the collection
      const sessions = querySnapshot.docs.map(doc => doc.data()); // Map each document to its data

      // Add the document ID to the data
      for (let i = 0; i < sessions.length; i++) {
        sessions[i].id = querySnapshot.docs[i].id; // Add the document ID to the data
      }

      return sessions; // Return the array of session data
    } catch (error) {
      console.error("Get Session :: error", error);
      return false;
    }
  }

  async updateSession(sessionId, updatedData) {
    let userId = this.getuserId(); // get the user ID
    try {
      await updateDoc(doc(this.database, userId, sessionId), updatedData);
      return true;
    } catch (error) {
      console.error("Update Session :: error", error);
      return false;
    }
  }

  async deleteSession(sessionId) {
    let userId = this.getuserId(); // get the user ID
    try {
      await deleteDoc(doc(this.database, userId, sessionId));
      return true;
    } catch (error) {
      console.error("Delete Session :: error", error);
      return false;
    }
  }

  getuserId() {
    let user = firebaseAuth.getUser();
    return user.uid;
  }
}

const firebaseDB = new DBService();
export default firebaseDB;
