
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBGNX2P67sPCIE-MZmKpR2z7auXUkFdWGQ",
  authDomain: "house-marketplace-app-aa656.firebaseapp.com",
  projectId: "house-marketplace-app-aa656",
  storageBucket: "house-marketplace-app-aa656.appspot.com",
  messagingSenderId: "729591776833",
  appId: "1:729591776833:web:0631621b405efe1fa968c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()