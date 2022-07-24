// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-apjE41WUDrao3QCvZeV9hIjRTAg8wok",
    authDomain: "pistahousetexas-df1ab.firebaseapp.com",
    projectId: "pistahousetexas-df1ab",
    storageBucket: "pistahousetexas-df1ab.appspot.com",
    messagingSenderId: "410001912982",
    appId: "1:410001912982:web:0337d04ee47814d6d83eb7",
    measurementId: "G-QDGZN2G9Z3",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// export const analytics = getAnalytics(app)
export const db = getFirestore(app)
