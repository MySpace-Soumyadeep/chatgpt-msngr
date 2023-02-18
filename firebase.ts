import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxVHx-7PzInKuhINIVWAyg-vQOGqnLLg8",
  authDomain: "chatgpt-mssngr.firebaseapp.com",
  projectId: "chatgpt-mssngr",
  storageBucket: "chatgpt-mssngr.appspot.com",
  messagingSenderId: "289215961917",
  appId: "1:289215961917:web:15df03c3017884b52cc354"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app);

export {db};