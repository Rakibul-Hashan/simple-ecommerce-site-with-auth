// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7tUYhMTPO6YTKqmqOR7_uAZVBojeW9Kc",
  authDomain: "simple-ecommerce-site-477c5.firebaseapp.com",
  projectId: "simple-ecommerce-site-477c5",
  storageBucket: "simple-ecommerce-site-477c5.appspot.com",
  messagingSenderId: "1080582984669",
  appId: "1:1080582984669:web:27b81e8130c7bc4c6bdc34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;