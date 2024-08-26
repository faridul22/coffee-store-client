// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMDrhOnKA4nroaGxAS5qukwrT6eUNIIeI",
    authDomain: "coffee-store-184ff.firebaseapp.com",
    projectId: "coffee-store-184ff",
    storageBucket: "coffee-store-184ff.appspot.com",
    messagingSenderId: "855036807898",
    appId: "1:855036807898:web:e38712cd5de051804573e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;