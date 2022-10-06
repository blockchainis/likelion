// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2xgtjbnRFlOTbSeDftyNNqtcYJAEnh3E",
  authDomain: "business-card-maker-70c16.firebaseapp.com",
  projectId: "business-card-maker-70c16",
  storageBucket: "business-card-maker-70c16.appspot.com",
  messagingSenderId: "581972139344",
  appId: "1:581972139344:web:b0256b8eca4d4e3b0fa055",
  measurementId: "G-HHE0H9TTX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);