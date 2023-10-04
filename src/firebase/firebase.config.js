// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNB3O_hRGGc9rAQJ2KPOOpaaQASZT5f34",
  authDomain: "email-auth-with-context-api.firebaseapp.com",
  projectId: "email-auth-with-context-api",
  storageBucket: "email-auth-with-context-api.appspot.com",
  messagingSenderId: "223089287207",
  appId: "1:223089287207:web:9dfc4b42e5f668d5a2ee02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth