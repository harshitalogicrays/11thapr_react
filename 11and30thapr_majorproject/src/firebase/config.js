
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAnSgmRKWl86ZVQRKZvaUwIYC-L05goEEw",
  authDomain: "apr11-30-react.firebaseapp.com",
  projectId: "apr11-30-react",
  storageBucket: "apr11-30-react.appspot.com",
  messagingSenderId: "947994375326",
  appId: "1:947994375326:web:bd13e69395a80c34adf78f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage=getStorage(app)
export default app