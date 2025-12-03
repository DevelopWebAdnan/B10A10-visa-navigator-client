// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb-yDUG2frbNmDy9oYKDiRXqpX3McTadE",
  authDomain: "b10a10-visa-navigator-client.firebaseapp.com",
  projectId: "b10a10-visa-navigator-client",
  storageBucket: "b10a10-visa-navigator-client.firebasestorage.app",
  messagingSenderId: "496053141766",
  appId: "1:496053141766:web:7a12a1a6a11667d3231e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);