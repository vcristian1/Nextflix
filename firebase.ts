// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBy6-X5Ykws7J-F4p9Zrk-tkgXoM4k2fm0",
//     authDomain: "nextflix-react.firebaseapp.com",
//     projectId: "nextflix-react",
//     storageBucket: "nextflix-react.appspot.com",
//     messagingSenderId: "723074020428",
//     appId: "1:723074020428:web:da2efc6f68f60ff235b0e9"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCKeYR7avRbH87LWPMCyQybsiaWjoQMTUw",
    authDomain: "nextflix-js.firebaseapp.com",
    projectId: "nextflix-js",
    storageBucket: "nextflix-js.appspot.com",
    messagingSenderId: "527167388314",
    appId: "1:527167388314:web:9a79e45a8b1f1091d53d23"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }