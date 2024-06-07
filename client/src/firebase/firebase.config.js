// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9iglLbSLIFfsEq_cC3G7_s7cQlb85Wow",
  authDomain: "book-store-app-a14a9.firebaseapp.com",
  projectId: "book-store-app-a14a9",
  storageBucket: "book-store-app-a14a9.appspot.com",
  messagingSenderId: "23481635479",
  appId: "1:23481635479:web:fdd99bf8bd61bc26df8fd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app