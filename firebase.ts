// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyD-tKrLnSdL5bgUqabAttXneLPM945UK34",
  authDomain: "nextflix-267a5.firebaseapp.com",
  projectId: "nextflix-267a5",
  storageBucket: "nextflix-267a5.appspot.com",
  messagingSenderId: "389868400683",
  appId: "1:389868400683:web:a73c3646c1a6030ca2fa6e"
=======
  apiKey: "AIzaSyDsvyrt1TjW6Z6Ztcw5c2fTSRAZxmSR8Vo",
  authDomain: "nextflix-49591.firebaseapp.com",
  projectId: "nextflix-49591",
  storageBucket: "nextflix-49591.appspot.com",
  messagingSenderId: "404073234354",
  appId: "1:404073234354:web:bd6f8319ff15c2c2fb2eab"
>>>>>>> 28a49f2fc94f00236a2724624bef1646efca4ce3
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }