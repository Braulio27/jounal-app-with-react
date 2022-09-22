// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7JckNO4AvT1bKYTbBPP_cgHXhKiAJ7S0",
    authDomain: "journal-react-app-fa0ee.firebaseapp.com",
    projectId: "journal-react-app-fa0ee",
    storageBucket: "journal-react-app-fa0ee.appspot.com",
    messagingSenderId: "925202776297",
    appId: "1:925202776297:web:78494a0b764570194d7078"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);