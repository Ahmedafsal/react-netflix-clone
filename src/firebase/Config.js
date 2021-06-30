import firebase from "firebase"
import 'firebase/auth'
import 'firebase/database'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW7wvIjH1Sn2XFZrxi-7-kMtw-QN37fw8",
  authDomain: "react-netflix-clone-28925.firebaseapp.com",
  projectId: "react-netflix-clone-28925",
  storageBucket: "react-netflix-clone-28925.appspot.com",
  messagingSenderId: "543778570878",
  appId: "1:543778570878:web:4642166b28fb7b72374e2f",
  measurementId: "G-VSH67BKDD9"
};

export const Firebase = firebase.initializeApp(firebaseConfig);