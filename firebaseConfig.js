import { initializeApp } from 'firebase/app';
import * as auth from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBIQ0zK1Q-qKuR7R-4zKb-hNFv-u_6CCiI",
    authDomain: "mealstogo-beead.firebaseapp.com",
    projectId: "mealstogo-beead",
    storageBucket: "mealstogo-beead.appspot.com",
    messagingSenderId: "452085988824",
    appId: "1:452085988824:web:12d91ca8a7cde6b59346ad"
  };

  initializeApp(firebaseConfig);
  const getAuth = auth.getAuth();

  export const firebase = { auth,getAuth }