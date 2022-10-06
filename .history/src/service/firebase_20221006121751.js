// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB2xgtjbnRFlOTbSeDftyNNqtcYJAEnh3E",
  authDomain: "business-card-maker-70c16.firebaseapp.com",
  databaseURL : "http://business-card-maker-70c16.firebaseio.com",
  projectId: "business-card-maker-70c16",
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);