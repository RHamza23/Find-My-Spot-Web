import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4pEm_BN7YpMlAXSEsMI9wLOZAs7XMTFY",
  authDomain: "find-my-spot-8783e.firebaseapp.com",
  databaseURL: "https://find-my-spot-8783e-default-rtdb.firebaseio.com",
  projectId: "find-my-spot-8783e",
  storageBucket: "find-my-spot-8783e.appspot.com",
  messagingSenderId: "507807311380",
  appId: "1:507807311380:web:accf67e3a59d3c37dfe901"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);