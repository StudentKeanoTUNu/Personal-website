// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjLHCUprr2I2LmWLFEK190M5UQJN2nEhQ",
    authDomain: "first-project-11693.firebaseapp.com",
    projectId: "first-project-11693",
    storageBucket: "first-project-11693.firebasestorage.app",
    messagingSenderId: "700425399295",
    appId: "1:700425399295:web:2792d325e3c5d7f09f15ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };