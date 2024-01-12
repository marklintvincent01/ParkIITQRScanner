import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "your.apiKey",
    authDomain: "your.authDomain",
    projectId: "your.projectId",
    storageBucket: "your.storageBucket",
    databaseURL: "your.databaseURL",
    messagingSenderId: "your.messagingSenderId",
    appId: "your.appId",
    measurementId: "your.measurementId"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);