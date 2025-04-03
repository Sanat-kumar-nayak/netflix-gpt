// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdqs1PDM_86mdVc_dqYbSLfrgrhvaGF7k",
  authDomain: "netflixgpt-a3aaa.firebaseapp.com",
  projectId: "netflixgpt-a3aaa",
  storageBucket: "netflixgpt-a3aaa.firebasestorage.app",
  messagingSenderId: "975377381228",
  appId: "1:975377381228:web:25d99c71ff5a78d6b52549",
  measurementId: "G-XPQ99RZNHS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
