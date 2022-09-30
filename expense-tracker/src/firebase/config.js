import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA4YTDaworBC3kZUm-28C11nrlmRFhObWY",
    authDomain: "react-expense-b78cf.firebaseapp.com",
    databaseURL: "https://react-expense-b78cf-default-rtdb.firebaseio.com",
    projectId: "react-expense-b78cf",
    storageBucket: "react-expense-b78cf.appspot.com",
    messagingSenderId: "808020443101",
    appId: "1:808020443101:web:7e9c3ff1e5654667cd0034",
    measurementId: "G-CVSFSF1450"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app;

  export const db = getFirestore(app);