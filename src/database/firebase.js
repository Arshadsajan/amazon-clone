// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCfl-Ci72zLprxBfH4opUjJabu4dC94Ar8",
  authDomain: "clone-ac8d5.firebaseapp.com",
  projectId: "clone-ac8d5",
  storageBucket: "clone-ac8d5.appspot.com",
  messagingSenderId: "1046972647754",
  appId: "1:1046972647754:web:52cb1060d545619339d9b3",
  measurementId: "G-LMZ77HLFLB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };