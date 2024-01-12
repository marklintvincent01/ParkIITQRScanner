import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import AsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: "AIzaSyAtsKBwASydm6x8-kQVM0DuTFed7U8NOd0",
    authDomain: "parkiit.firebaseapp.com",
    projectId: "parkiit",
    storageBucket: "parkiit.appspot.com",
    databaseURL: "https://parkiit-default-rtdb.asia-southeast1.firebasedatabase.app/",
    messagingSenderId: "337466403051",
    appId: "1:337466403051:web:c8d961e6ae6e8c8e0a76ae",
    measurementId: "G-FM5W79GYB2"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);