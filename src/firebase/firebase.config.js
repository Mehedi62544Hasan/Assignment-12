// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMYc1mJiDRjuNShPaUTKL9E_2vLYvY5lw",
  authDomain: "resale-mobile-point.firebaseapp.com",
  projectId: "resale-mobile-point",
  storageBucket: "resale-mobile-point.appspot.com",
  messagingSenderId: "511149244166",
  appId: "1:511149244166:web:0ace50228fc324849fa887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;