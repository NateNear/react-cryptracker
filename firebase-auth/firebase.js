import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAIAbY9ROVmz4xApaac60fF4TB99nguM4Q",
  authDomain: "cryptracker-c8f00.firebaseapp.com",
  projectId: "cryptracker-c8f00",
  storageBucket: "cryptracker-c8f00.appspot.com",
  messagingSenderId: "497721567308",
  appId: "1:497721567308:web:06d6c19fe4f646d173ece9",
  measurementId: "G-6XETST5Q6G"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };