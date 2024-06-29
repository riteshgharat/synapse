import { app } from "./firebase/config.js";

import { getDatabase, ref, set, get, update, remove } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";


export class DBService {
    constructor() {
      this.database = getDatabase(app);
      this.storage = getStorage(app);
    }
  
    // Realtime Database services
    async createPost(postId, postData) {
      try {
        await set(ref(this.database, `posts/${postId}`), postData);
        return true;
      } catch (error) {
        console.error("FirebaseService :: createPost :: error", error);
        return false;
      }
    }
  
    async getPost(postId) {
      try {
        const snapshot = await get(ref(this.database, `posts/${postId}`));
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return null;
        }
      } catch (error) {
        console.error("FirebaseService :: getPost :: error", error);
        return null;
      }
    }
  
    async updatePost(postId, updates) {
      try {
        await update(ref(this.database, `posts/${postId}`), updates);
        return true;
      } catch (error) {
        console.error("FirebaseService :: updatePost :: error", error);
        return false;
      }
    }
  
    async deletePost(postId) {
      try {
        await remove(ref(this.database, `posts/${postId}`));
        return true;
      } catch (error) {
        console.error("FirebaseService :: deletePost :: error", error);
        return false;
      }
    }
  
    // Cloud Storage services
    async uploadFile(file, filePath) {
      const fileRef = storageRef(this.storage, filePath);
      try {
        const snapshot = await uploadBytes(fileRef, file);
        return getDownloadURL(snapshot.ref);
      } catch (error) {
        console.error("FirebaseService :: uploadFile :: error", error);
        return null;
      }
    }
  
    async deleteFile(filePath) {
      const fileRef = storageRef(this.storage, filePath);
      try {
        await deleteObject(fileRef);
        return true;
      } catch (error) {
        console.error("FirebaseService :: deleteFile :: error", error);
        return false;
      }
    }
  }
  
  const firebaseDB = new DBService();
  export default firebaseDB;
  