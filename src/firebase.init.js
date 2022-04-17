// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDCKoKN7wDNnOciZfdMSL7cu-CX4v3wW0",
  authDomain: "react-firebase-assignmen-6de9d.firebaseapp.com",
  projectId: "react-firebase-assignmen-6de9d",
  storageBucket: "react-firebase-assignmen-6de9d.appspot.com",
  messagingSenderId: "969336971687",
  appId: "1:969336971687:web:eea19af1eb5e81d8799682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default(auth)