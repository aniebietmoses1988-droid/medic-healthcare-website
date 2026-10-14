
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3qPHezqIV2FPYRz57tln4tWPaoDj2Y58",
  authDomain: "medic-healthcare.firebaseapp.com",
  projectId: "medic-healthcare",
  storageBucket: "medic-healthcare.firebasestorage.app",
  messagingSenderId: "422155248177",
  appId: "1:422155248177:web:c0cbe59c644065f6f82b10",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
