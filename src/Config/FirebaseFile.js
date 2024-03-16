// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA9LvAbDxmO7xLXVDu623UUH_cM5_oKmrs",
    authDomain: "ecommer-flipkart.firebaseapp.com",
    projectId: "ecommer-flipkart",
    storageBucket: "ecommer-flipkart.appspot.com",
    messagingSenderId: "951522077884",
    appId: "1:951522077884:web:a5a713685a16db448a34b9",
    measurementId: "G-PYW1QLGSBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const providerGoogle = new GoogleAuthProvider();

export { auth, providerGoogle }