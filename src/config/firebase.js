// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD67gyS-d-QqR1YBrwCm64Kp7QOAFNvnEs",
    authDomain: "tiktok---jornadadev-d4d90.firebaseapp.com",
    projectId: "tiktok---jornadadev-d4d90",
    storageBucket: "tiktok---jornadadev-d4d90.appspot.com",
    messagingSenderId: "1054371137377",
    appId: "1:1054371137377:web:0d6482a5b1174e6ad2a720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;