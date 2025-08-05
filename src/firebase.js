// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClXuNErNFfse3V_HXuHs5WrK6E1YPADeU",
  authDomain: "proyectofinal-bda10.firebaseapp.com",
  projectId: "proyectofinal-bda10",
  storageBucket: "proyectofinal-bda10.firebasestorage.app",
  messagingSenderId: "785679582976",
  appId: "1:785679582976:web:3629b9f749ca37115215e5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authFirebase = getAuth(app);
export const dbFirebase = getFirestore(app);


export default app;