import * as firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDQIFkvPBps22pqidMhm7ecl4eDWP_W-88",
  authDomain: "docuras-da-beta.firebaseapp.com",
  databaseURL: "https://docuras-da-beta.firebaseio.com",
  projectId: "docuras-da-beta",
  storageBucket: "docuras-da-beta.appspot.com",
  messagingSenderId: "238752127009",
  appId: "1:238752127009:web:6d53909b20efd8ac5a2b60"
};

firebase.initializeApp(
 firebaseConfig,
);