// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnVZHkc9wXBg7lYPE6eHmjS0hIYARXeI0",
  authDomain: "costabrava-cf60a.firebaseapp.com",
  projectId: "costabrava-cf60a",
  storageBucket: "costabrava-cf60a.appspot.com",
  messagingSenderId: "98481208985",
  appId: "1:98481208985:web:ae0645bda079b915850208"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db 