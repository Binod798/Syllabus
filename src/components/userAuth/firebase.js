import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBu4O7mN-xaD7cBJQJOaOriuk5bkxqtCqo",
  authDomain: "padandaas-3eb1c.firebaseapp.com",
  databaseURL:
    "https://padandaas-3eb1c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "padandaas-3eb1c",
  storageBucket: "padandaas-3eb1c.appspot.com",
  messagingSenderId: "717810777788",
  appId: "1:717810777788:web:83470085342c60d8bf9ab9",
  measurementId: "G-5LGQM21VRJ",
});

export const auth = app.auth();
export default app;
