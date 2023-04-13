import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBKnz02B9Y7af8R-qpiM5B-n0Hxd4aIxgQ",
  authDomain: "willy-7da9d.firebaseapp.com",
  projectId: "willy-7da9d",
  storageBucket: "willy-7da9d.appspot.com",
  messagingSenderId: "408575844941",
  appId: "1:408575844941:web:0a0755601b65440cacb204"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
