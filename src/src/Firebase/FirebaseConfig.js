// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIbHhavagZIeFMRlQKxfMUXTJlZdrmf8A",
    authDomain: "prubea-ced3a.firebaseapp.com",
    projectId: "prubea-ced3a",
    storageBucket: "prubea-ced3a.appspot.com",
    messagingSenderId: "416488374774",
    appId: "1:416488374774:web:0843f8dca838d918e5c7d7",
    measurementId: "G-695QEEH2YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const analytics = getAnalytics(app);
 export const bataBase = getFirestore()


export {
    app,
    google,
}