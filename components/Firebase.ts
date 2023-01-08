// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5TF4kt90jKvdEXRPWuahIaX0q2C3jleE",
    authDomain: "pistahouseirving-d6418.firebaseapp.com",
    projectId: "pistahouseirving-d6418",
    storageBucket: "pistahouseirving-d6418.appspot.com",
    messagingSenderId: "1066360221558",
    appId: "1:1066360221558:web:7b8c4753c57f235b1ad457",
    measurementId: "G-9RX6PZQD91",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)