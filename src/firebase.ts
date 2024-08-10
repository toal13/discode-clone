// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGgSG4Zd_9YPZwm7v_aePN0A85Yhjwxxs",
  authDomain: "discord-clone-toal13.firebaseapp.com",
  projectId: "discord-clone-toal13",
  storageBucket: "discord-clone-toal13.appspot.com",
  messagingSenderId: "452671289813",
  appId: "1:452671289813:web:a8949f93dd165eb2d1e55c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
