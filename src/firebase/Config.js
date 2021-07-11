import firebase from "firebase"
import 'firebase/auth'
import 'firebase/database'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsUFOsEM92lxekjnrtoRQ9uvPYA7C_MHI",
  authDomain: "react-netflix-clone-1c99e.firebaseapp.com",
  projectId: "react-netflix-clone-1c99e",
  storageBucket: "react-netflix-clone-1c99e.appspot.com",
  messagingSenderId: "543202849251",
  appId: "1:543202849251:web:1df54ced386e316f6830d6"
};

export const Firebase = firebase.initializeApp(firebaseConfig);