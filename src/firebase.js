import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdM70kbk-3v5mrZX0GqmifP2dUzzBV6VA",
    authDomain: "jg-chat-76c77.firebaseapp.com",
    projectId: "jg-chat-76c77",
    storageBucket: "jg-chat-76c77.appspot.com",
    messagingSenderId: "339449640626",
    appId: "1:339449640626:web:2c56da7aee404f6577fbab",
    measurementId: "G-XY91JFFR9T"
};

// // Initialize Fire  base
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth();
export const db = getFirestore();