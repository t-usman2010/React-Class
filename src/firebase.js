import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
// Replace these values with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDRZQHsfgKU1-1sTKT_qrxSIRjWjQimJB8",
  authDomain: "saylanischool.firebaseapp.com",
  projectId: "saylanischool",
  storageBucket: "saylanischool.firebasestorage.app",
  messagingSenderId: "944328009217",
  appId: "1:944328009217:web:488f3899a1d6fb5b194200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

export default app;