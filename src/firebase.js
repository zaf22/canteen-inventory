import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvqnqjbWWyRt7cgFkIYj7zXmnPllDJNq0",
  authDomain: "canteen-inventory.firebaseapp.com",
  projectId: "canteen-inventory",
  storageBucket: "canteen-inventory.appspot.com",
  messagingSenderId: "846722228922",
  appId: "1:846722228922:web:bd9bcb985141da067b9883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore Database and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);