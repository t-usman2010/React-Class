import { initializeApp } from "firebase/app";
// Your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyAodbobDIMXU04VsR9XWd-hbYS94cITCVY",
  authDomain: "taha-usman36412.firebaseapp.com",
  projectId: "taha-usman36412",
  storageBucket: "taha-usman36412.firebasestorage.app",
  messagingSenderId: "194082065883",
  appId: "1:194082065883:web:c267339a8807f6f4546bfe"
};

// Initialize Firebase
 const cong = initializeApp(firebaseConfig);

  export default cong;
// Now you can use Firebase services in your React app!