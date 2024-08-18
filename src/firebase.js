import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "Provide you API Key",
  authDomain: "chatapp7-adc9e.firebaseapp.com",
  projectId: "chatapp7-adc9e",
  storageBucket: "chatapp7-adc9e.appspot.com",
  messagingSenderId: "42179671212",
  appId: "1:42179671212:web:c8e5a7b76f62b2fb209b09"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
