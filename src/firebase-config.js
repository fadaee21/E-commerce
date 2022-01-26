import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzJ8K8ZtQmp4R52MGKO-S95F5DqQ654YY",
  authDomain: "arash-petro.firebaseapp.com",
  projectId: "arash-petro",
  storageBucket: "arash-petro.appspot.com",
  messagingSenderId: "86933922746",
  appId: "1:86933922746:web:3b8c574c2948d590023383",
  measurementId: "G-EKJQ0GK58C",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


 


