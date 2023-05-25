// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9OkWTMhvsH1kBF_brjUsKidkncJDvH-Y",
  authDomain: "routourist-4dbb0.firebaseapp.com",
  projectId: "routourist-4dbb0",
  storageBucket: "routourist-4dbb0.appspot.com",
  messagingSenderId: "814465646719",
  appId: "1:814465646719:web:e99bc097276bcd07dcbf4a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);