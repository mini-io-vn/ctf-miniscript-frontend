import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCsjldvn7uEb-T5mBZ1sYo3XNbgGpuECNE",
  authDomain: "ctf-miniscript.firebaseapp.com",
  projectId: "ctf-miniscript",
  storageBucket: "ctf-miniscript.appspot.com",
  messagingSenderId: "161554058102",
  appId: "1:161554058102:web:4c07950c61c74d18524857",
  measurementId: "G-5F41XHN75Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)
export const auth = getAuth(app);