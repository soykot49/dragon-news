// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRg36zpvoOCcDqShQfDy3ZW01eTu_E8mA",
  authDomain: "dragon-news-b287e.firebaseapp.com",
  projectId: "dragon-news-b287e",
  storageBucket: "dragon-news-b287e.firebasestorage.app",
  messagingSenderId: "611475004128",
  appId: "1:611475004128:web:5f34366b4131e9736e4e85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;