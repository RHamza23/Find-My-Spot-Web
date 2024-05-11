import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxOp6Z4frs_OUCn44hlEFAUUjCVXt_DaU",
    authDomain: "inpark-5a693.firebaseapp.com",
    databaseURL: "https://inpark-5a693-default-rtdb.firebaseio.com",
    projectId: "inpark-5a693",
    storageBucket: "inpark-5a693.appspot.com",
    messagingSenderId: "595794346344",
    appId: "1:595794346344:web:b1c61909afc26043a916dd",
    measurementId: "G-SQPPDZCJ2Z"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
