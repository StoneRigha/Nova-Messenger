import firebase from "firebase/app";
import "firebase/database";

const config = {
    // API KEYS
  apiKey: "AIzaSyB2kGp07HgS_V9waamQCGjozXxzc6nHmTo",
  authDomain: "novamessenger-39c8e.firebaseapp.com",
  projectId: "novamessenger-39c8e",
  storageBucket: "novamessenger-39c8e.appspot.com",
  messagingSenderId: "248000963636",
  appId: "1:248000963636:web:3558b03cc3b0dddbf1d661"
}

const db = firebase.initializeApp(config);
export default db;