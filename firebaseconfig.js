
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9ojTJWdx0MHdXVZqCu6BeuoJoWDCuQsE",
  authDomain: "handebol-94435.firebaseapp.com",
  databaseURL: "https://handebol-94435-default-rtdb.firebaseio.com",
  projectId: "handebol-94435",
  storageBucket: "handebol-94435.firebasestorage.app",
  messagingSenderId: "464336775363",
  appId: "1:464336775363:web:c09a223a473502ac071a76"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

export { app };
