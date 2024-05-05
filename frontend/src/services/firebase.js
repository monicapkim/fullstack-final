import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBetJynxvufssge_mmvzbexr9wH_o-t9M",
  authDomain: "fs-final-9731e.firebaseapp.com",
  projectId: "fs-final-9731e",
  storageBucket: "fs-final-9731e.appspot.com",
  messagingSenderId: "424832953456",
  appId: "1:424832953456:web:d137695a0a25adfc17d8b5",
  measurementId: "G-MGN1XTN2TF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
