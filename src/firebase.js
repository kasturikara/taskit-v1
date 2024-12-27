import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration (replace with your Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyCs0xA0iSVqdu87PqDVi-D-m2B6v6h3Bbs",
  authDomain: "taskit-964ef.firebaseapp.com",
  projectId: "taskit-964ef",
  storageBucket: "taskit-964ef.firebasestorage.app",
  messagingSenderId: "993809702155",
  appId: "1:993809702155:web:429f71e9e6378b38be160e",
  // measurementId: "G-6B5BE5K8TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
