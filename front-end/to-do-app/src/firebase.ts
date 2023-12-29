// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ0XGjc27hojM2Bqqwow3Tl6Yj4hUz-j4",
    authDomain: "final-to-do-app.firebaseapp.com",
    projectId: "final-to-do-app",
    storageBucket: "final-to-do-app.appspot.com",
    messagingSenderId: "749658891436",
    appId: "1:749658891436:web:1578b8c9f33310b4b9ab09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};