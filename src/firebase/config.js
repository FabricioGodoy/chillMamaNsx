// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrz84xmh_QpXkoPTZ_eU0QvQfncgjgk6k",
  authDomain: "chillmama-74fa7.firebaseapp.com",
  projectId: "chillmama-74fa7",
  storageBucket: "chillmama-74fa7.appspot.com",
  messagingSenderId: "381476643789",
  appId: "1:381476643789:web:397e527e5ac4dd65b85a84",
  measurementId: "G-M8ZYPYFHYH"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app)