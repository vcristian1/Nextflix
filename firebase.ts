// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsvyrt1TjW6Z6Ztcw5c2fTSRAZxmSR8Vo",
  authDomain: "nextflix-49591.firebaseapp.com",
  projectId: "nextflix-49591",
  storageBucket: "nextflix-49591.appspot.com",
  messagingSenderId: "404073234354",
  appId: "1:404073234354:web:bd6f8319ff15c2c2fb2eab"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }