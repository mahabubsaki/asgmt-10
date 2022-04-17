// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACkKsMKKHWzEBoi67gYLrhKjglmn4SXlg",
    authDomain: "medispace-416d4.firebaseapp.com",
    projectId: "medispace-416d4",
    storageBucket: "medispace-416d4.appspot.com",
    messagingSenderId: "175710617101",
    appId: "1:175710617101:web:523143e132bea727595f44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth