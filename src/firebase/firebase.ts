import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBlOXesn6aKkDeyTaYsjCaRb9oHg7AKqjo",
  authDomain: "testing-8f9dc.firebaseapp.com",
  projectId: "testing-8f9dc",
  storageBucket: "testing-8f9dc.appspot.com",
  messagingSenderId: "223878590127",
  appId: "1:223878590127:web:663c3bae4f53d8bb7c6e5a",
  measurementId: "G-B87BR0BLK8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };