// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCj9dNpUPFoHC56_kGSKPAq4F4DhiIPjVc",
    authDomain: "suyeonblog-61c16.firebaseapp.com",
    projectId: "suyeonblog-61c16",
    storageBucket: "suyeonblog-61c16.appspot.com",
    messagingSenderId: "459394429654",
    appId: "1:459394429654:web:de9ed03009b4d4ae55cf77",
    measurementId: "G-D58V66F2PC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db};
