import firebase from "firebase"
import 'firebase/auth'
import 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyCWPvTZloAFhuc3WeJn41F-3PXuVnd8fYE",
  authDomain: "react-netflix-clone-f5f9e.firebaseapp.com",
  projectId: "react-netflix-clone-f5f9e",
  storageBucket: "react-netflix-clone-f5f9e.appspot.com",
  messagingSenderId: "249319915076",
  appId: "1:249319915076:web:2c7a0505ff0f7f92518611",
  measurementId: "G-8K7334QJ8T"
};

export const Firebase = firebase.initializeApp(firebaseConfig);