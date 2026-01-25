// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCET-vGI3BNCT0XCDwaUB9sZMU3YCL5tgE',
  authDomain: 'ysl-type.firebaseapp.com',
  projectId: 'ysl-type',
  storageBucket: 'ysl-type.firebasestorage.app',
  messagingSenderId: '999519452766',
  appId: '1:999519452766:web:ac7df9e89d0b985ae7fecf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
