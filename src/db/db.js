// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGuLWAMPCWgHwuvNmjmLP95otc6Qgt3Lc",
  authDomain: "costa-brava-d92a4.firebaseapp.com",
  projectId: "costa-brava-d92a4",
  storageBucket: "costa-brava-d92a4.appspot.com",
  messagingSenderId: "331141464892",
  appId: "1:331141464892:web:5b979cd1322f59456f1439"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db 