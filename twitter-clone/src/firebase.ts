
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-26vxgfA4WPbkcjDjP13zsO0y_e8JKEQ",
  authDomain: "twitter-b39f4.firebaseapp.com",
  projectId: "twitter-b39f4",
  storageBucket: "twitter-b39f4.appspot.com",
  messagingSenderId: "157930519023",
  appId: "1:157930519023:web:75a842da48a621d7ab1e1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);