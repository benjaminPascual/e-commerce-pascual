import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCRjZ-HKt94wLJsmtiNrYIx3X9XWpj9tDY",
  authDomain: "e-commerce-pascual.firebaseapp.com",
  projectId: "e-commerce-pascual",
  storageBucket: "e-commerce-pascual.appspot.com",
  messagingSenderId: "220052904060",
  appId: "1:220052904060:web:fa95e0bdd431dfd32711f9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);