// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqfdF2thW5atrQaW5wbGVpNKpD4RehSW0",
  authDomain: "smit-b2.firebaseapp.com",
  databaseURL: "https://smit-b2-default-rtdb.firebaseio.com",
  projectId: "smit-b2",
  storageBucket: "smit-b2.appspot.com",
  messagingSenderId: "688903714025",
  appId: "1:688903714025:web:095c9199c9fa31a463ac78",
  measurementId: "G-MGBWHNMVQG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

