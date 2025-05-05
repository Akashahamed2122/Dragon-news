
// danger do not share public
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLUfF8eFwVvXkk2BLcFPTr5xtnuHtByhc",
  authDomain: "dragon-news-auth-7b679.firebaseapp.com",
  projectId: "dragon-news-auth-7b679",
  storageBucket: "dragon-news-auth-7b679.firebasestorage.app",
  messagingSenderId: "519720516498",
  appId: "1:519720516498:web:a45e5f71f0fd593b665f4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app