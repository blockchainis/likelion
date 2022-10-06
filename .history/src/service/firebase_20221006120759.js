// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB2xgtjbnRFlOTbSeDftyNNqtcYJAEnh3E",
  authDomain: "business-card-maker-70c16.firebaseapp.com",
  projectId: "business-card-maker-70c16",
  appId: "1:581972139344:web:b0256b8eca4d4e3b0fa055",
  measurementId: "G-HHE0H9TTX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);