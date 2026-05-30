import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-78afd.firebaseapp.com",
  projectId: "interviewiq-78afd",
  storageBucket: "interviewiq-78afd.firebasestorage.app",
  messagingSenderId: "840304572387",
  appId: "1:840304572387:web:3bc344e98d34bd292c52d6",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
